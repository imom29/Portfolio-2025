import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

interface ScrollVelocityProps {
  text: string;
  defaultVelocity?: number;
  className?: string;
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

function ParallaxText({
  children,
  baseVelocity = 100,
  className,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-12.5, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="overflow-hidden whitespace-nowrap flex flex-nowrap"
      style={{ width: "100%" }}
    >
      <motion.div
        className={`flex whitespace-nowrap ${className ?? ""}`}
        style={{ x }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="block mr-10 last:mr-10">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  text,
  defaultVelocity = 5,
  className,
}) => {
  return (
    <section className="relative w-full">
      <ParallaxText baseVelocity={defaultVelocity} className={className}>
        {text}
      </ParallaxText>
      <ParallaxText baseVelocity={-defaultVelocity} className={className}>
        {text}
      </ParallaxText>
    </section>
  );
};

export default ScrollVelocity;
