import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollFadeInProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}

export default function ScrollFadeIn({ 
  children, 
  direction = "left", 
  delay = 0, 
  className = "" 
}: ScrollFadeInProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: direction === "up" ? 20 : 0
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.6, delay, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      ref={ref} 
      initial="hidden" 
      animate={controls} 
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}