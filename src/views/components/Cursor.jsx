import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMousePosition from '../../assets/js/cursorPosition';

function Cursor() {
  const { x, y } = useMousePosition();
  const [clicked, setClicked] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className="cursor"
        style={{ transform: `translate(${x}px, ${y}px)` }}
        onClick={() => setClicked(true)}
      >
        <div className={`cursor_corner cursor_top_left ${clicked ? 'clicked' : ''}`}></div>
        <div className={`cursor_corner cursor_top_right ${clicked ? 'clicked' : ''}`}></div>
        <div className={`cursor_corner cursor_top_left2 ${clicked ? 'clicked' : ''}`}></div>
        <div className={`cursor_corner cursor_top_right2 ${clicked ? 'clicked' : ''}`}></div>
        <div className={`cursor_corner cursor_bottom_left ${clicked ? 'clicked' : ''}`}></div>
        <div className={`cursor_corner cursor_bottom_right ${clicked ? 'clicked' : ''}`}></div>
        <div className={`cursor_corner cursor_bottom_left2 ${clicked ? 'clicked' : ''}`}></div>
        <div className={`cursor_corner cursor_bottom_right2 ${clicked ? 'clicked' : ''}`}></div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Cursor;