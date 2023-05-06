import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

interface ICarousel {
  children: React.ReactNode[];
}

export const Carrousel: React.FunctionComponent<ICarousel> = ({ children }) => {
  const [[page, direction], setPage] = React.useState([0, 0]);

  const paginate = (newPage: number) => {
    setPage([newPage, newPage > page ? 1 : -1]);
  };

  return (
    <Box position="relative" width="100%" height="100%">
      {children.map((child, index) => {
        const slideIndex = index - page;
        return (
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 200 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(event, { offset, velocity }) => {
              const swipe = offset.x > 0 ? -1 : 1;
              if (velocity.x * swipe > 500) {
                paginate(page + swipe);
              } else {
                paginate(page);
              }
            }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: `${slideIndex * 100}%`,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </Box>
  );
};
