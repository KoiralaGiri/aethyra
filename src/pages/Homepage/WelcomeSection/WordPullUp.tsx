"use client";

import { motion, Variants } from "framer-motion";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
  fontSize?: string;
  style?: React.CSSProperties;
}

export function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
  fontSize,
  style,
}: WordPullUpProps) {
  return (
    <motion.div
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={className}
      style={{
        width: "100%",
        fontSize: fontSize,
        ...style
      }}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ 
            display: "inline-block", 
            padding: "0 4px",
            whiteSpace: "nowrap"
          }}
        >
          {word === "" ? "\u00A0" : word}
        </motion.span>
      ))}
    </motion.div>
  );
}