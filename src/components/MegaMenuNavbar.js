import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { ChevronRight, User, Briefcase, Code, Clock, Phone, UserCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import AnimatedLogo from './AnimatedLogo';
import './MegaMenuNavbar.css';


const LoginButton = () => {
  return (
    <motion.div
      variants={{
        hidden: { 
          y: -60,
          opacity: 0,
          rotate: -3
        },
        visible: { 
          y: 0,
          opacity: 1,
          rotate: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100
          }
        }
      }}
    >
      <Button 
        variant="ghost" 
        size="sm"
        className="text-white hover:text-white/90 hover:bg-white/10"
      >
        <UserCircle2 className="mr-2 h-4 w-4" />
        Sign In
      </Button>
    </motion.div>
  );
};

const MegaMenuNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuDimensions, setMenuDimensions] = useState({ width: 0, height: 0 });
  const menuRefs = useRef(new Map());
  let hideTimeout;

  const navVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 3.2,
        delay: 3.2,
      }
    }
  };
  
  const logoContainerVariants = {
    hidden: { 
      y: -60,
      opacity: 0,
      rotate: -3
    },
    visible: { 
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      y: -60,
      opacity: 0,
      rotate: -3
    },
    visible: { 
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const menuItems = [
    { id: 'about', title: 'About Us', icon: User },
    { id: 'portfolio', title: 'Portfolio', icon: Briefcase },
    { id: 'services', title: 'Services', icon: Code },
    { id: 'coming-soon', title: 'Coming Soon', icon: Clock },
    { id: 'contact', title: 'Contact Us', icon: Phone },
  ];

  const megaMenuContent = {
    about: [
      { title: 'Our Story', description: 'Learn more about our journey', imgPlaceholder: '/api/placeholder/60/40' },
      { title: 'Mission', description: 'Our mission and values', imgPlaceholder: '/api/placeholder/60/40' },
      { title: 'Team', description: 'Meet our experts', imgPlaceholder: '/api/placeholder/60/40' },
    ],
    portfolio: [
      { title: 'Case Studies', description: 'See our work in action', imgPlaceholder: '/api/placeholder/60/40' },
      { title: 'Clients', description: 'Our trusted partners', imgPlaceholder: '/api/placeholder/60/40' },
      { title: 'Industries', description: 'Sectors we serve', imgPlaceholder: '/api/placeholder/60/40' },
      { title: 'Success Stories', description: 'Client testimonials', imgPlaceholder: '/api/placeholder/60/40' },
    ],
    services: [
      { title: 'Web Development', description: 'Creating seamless websites', imgPlaceholder: '/api/placeholder/60/40' },
      { title: 'Digital Marketing', description: 'Grow your business online', imgPlaceholder: '/api/placeholder/60/40' },
    ],
    'coming-soon': [
      { title: 'Stay Tuned', description: 'Exciting updates are coming', imgPlaceholder: '/api/placeholder/60/40' },
    ],
    contact: [
      { title: 'Get in Touch', description: 'Contact us for more information', imgPlaceholder: '/api/placeholder/60/40' },
      { title: 'Support', description: '24/7 customer support', imgPlaceholder: '/api/placeholder/60/40' },
      { title: 'Careers', description: 'Join our team', imgPlaceholder: '/api/placeholder/60/40' },
    ],
  };

  useLayoutEffect(() => {
    if (activeMenu) {
      const menuContent = menuRefs.current.get(activeMenu);
      if (menuContent) {
        const { width, height } = menuContent.getBoundingClientRect();
        setMenuDimensions({ width, height });
      }
    }
  }, [activeMenu]);

  const handleMouseEnter = (item) => {
    clearTimeout(hideTimeout);
    setActiveMenu(item.id);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setActiveMenu(null);
      setMenuDimensions({ width: 0, height: 0 });
    }, 200);
  };

  const springConfig = {
    stiffness: 700,
    damping: 35,
    mass: 0.5,
  };

  const width = useSpring(menuDimensions.width, springConfig);
  const height = useSpring(menuDimensions.height, springConfig);

  return (
    <motion.nav 
      className="navbar" 
      onMouseLeave={handleMouseLeave}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="logo"
        variants={logoContainerVariants}
      >
        <AnimatedLogo />
      </motion.div>
      <div className="navbar-content">
        <div className="menu-items">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className="menu-item"
                variants={itemVariants}
                onMouseEnter={() => handleMouseEnter(item)}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <div className="menu-item-content">
                  <Icon className="menu-icon" size={16} />
                  <span>{item.title}</span>
                </div>
                <AnimatePresence>
                  {activeMenu === item.id && (
                    <motion.div
                      className="mega-menu"
                      initial={{ 
                        opacity: 0, 
                        scale: 0.95, 
                        y: 10,
                      }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                        width: menuDimensions.width,
                        height: menuDimensions.height,
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0.95, 
                        y: 10,
                        transition: { duration: 0.1 }
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 35,
                        mass: 0.5,
                        duration: 0.2
                      }}
                    >
                      <div 
                        className="mega-menu-content"
                        ref={el => menuRefs.current.set(item.id, el)}
                      >
                        {megaMenuContent[item.id]?.map((option, index) => (
                          <motion.div
                            key={index}
                            className="mega-menu-option"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: index * 0.03,
                              type: "spring",
                              damping: 25,
                              stiffness: 400,
                              mass: 0.5,
                              duration: 0.15
                            }}
                          >
                            <div className="img-wrapper">
                              <img 
                                src={option.imgPlaceholder}
                                alt={option.title}
                                className="menu-image"
                              />
                            </div>
                            <div className="option-text">
                              <div className="option-title">{option.title}</div>
                              <div className="option-description">{option.description}</div>
                            </div>
                            <ChevronRight className="option-arrow" size={16} />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="login-container">
        <LoginButton />
      </div>
    </motion.nav>
  );
};

export default MegaMenuNavbar;