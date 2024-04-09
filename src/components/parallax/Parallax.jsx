import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111110, #2d2d29"
            : "linear-gradient(180deg, #111110, #2d2d29)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "section" ? "What We Do?" : "What We Did?"}
      </motion.h1>

      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "section" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
