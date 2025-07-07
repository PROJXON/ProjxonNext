'use client';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { CustomButtonProps } from '@/types/interfaces';

const AnimatedButton = ({
  buttonText,
  link,
  buttonStyle,
  delayTime = 0,
  isExternal = false,
  isAnimated = false,
}: CustomButtonProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const button = (
    <motion.button
      className={`btn btn-primary fs-5 px-4 ${buttonStyle}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delayTime }}
    >
      {buttonText}
    </motion.button>
  );

  const staticButton = (
    <button className={`btn btn-primary fs-5 px-4 ${buttonStyle}`}>
      {buttonText}
    </button>
  );

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" ref={ref}>
        {isAnimated ? button : staticButton}
      </a>
    );
  }

  return (
    <span ref={ref}>
      <Link href={link}>{isAnimated ? button : staticButton}</Link>
    </span>
  );
};

export default AnimatedButton;