import { motion, AnimatePresence } from 'framer-motion';
import useMousePosition from '../../assets/js/cursorPosition';

function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <AnimatePresence>
      <motion.div
        key="cursor" 
        className={"cursor"}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        style={{ transform: `translate(${x}px, ${y}px)` }}
      >
        <div className="cursor_top"></div>
        <div className="cursor_bottom"></div>
        <div className="cursor_left"></div>
        <div className="cursor_right"></div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Cursor;