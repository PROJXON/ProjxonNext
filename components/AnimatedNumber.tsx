'use client';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold as per your design needs
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000; // Duration for the animation (2 seconds)
      const increment = end / (duration / 16); // Increment per frame (60 FPS)

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span ref={ref}>{count}</span>;
};

export default AnimatedNumber;