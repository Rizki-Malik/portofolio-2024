import { motion, AnimatePresence } from 'framer-motion';
import useMousePosition from '../../../assets/js/cursorPosition';
import React, { useState, useEffect } from 'react';
import { useCursor } from './CursorContext';

function Cursor() {
  const { x, y } = useMousePosition();
  const { isHoveringWhite } = useCursor();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const getBackgroundColor = () => (clicked ? 'red' : isHoveringWhite ? 'black' : '');
  const getTransform = (transformValue) => (clicked ? transformValue : '');
  const getTransition = () => 'transform 0.1s ease-in-out';

  const cursorStyles = {
    backgroundColor: getBackgroundColor(),
    transition: getTransition(),
  };

  return (
    <AnimatePresence>
      <motion.div
        className="cursor"
        style={{ transform: `translate(${x}px, ${y}px)` }}
      >
        {['top_left', 'top_left2', 'top_right', 'top_right2', 'bottom_left', 'bottom_left2', 'bottom_right', 'bottom_right2'].map((pos, index) => (
          <div
            key={index}
            className={`cursor_corner cursor_${pos}`}
            style={{
              ...cursorStyles,
              transform: getTransform({
                'top_left': 'translate(150%, 350%)',
                'top_left2': 'translate(420%, 120%)',
                'top_right': 'translate(-150%, 350%)',
                'top_right2': 'translate(-420%, 120%)',
                'bottom_left': 'translate(420%, -120%)',
                'bottom_left2': 'translate(150%, -350%)',
                'bottom_right': 'translate(-420%, -120%)',
                'bottom_right2': 'translate(-150%, -350%)',
              }[pos]),
            }}
          ></div>
        ))}
        <div
          className="cursor_ball"
          style={cursorStyles}
        ></div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Cursor;