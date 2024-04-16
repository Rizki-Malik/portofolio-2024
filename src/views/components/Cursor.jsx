import { motion, AnimatePresence } from 'framer-motion';
import useMousePosition from '../../assets/js/cursorPosition';

function Cursor({ clicked }) {
  const { x, y } = useMousePosition();

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="cursor"
          style={{ transform: `translate(${x}px, ${y}px)` }}
        >
          <div
            className={`cursor_corner cursor_top_left`}
            style={{
              transform: clicked ? 'translate(150%, 350%)' : '',
              backgroundColor: clicked ? 'red' : '',
              transition: clicked ? 'transform 0.2s ease-in-out' : 'transform 0.2s ease-in-out'
            }}
          ></div>
          <div
            className={`cursor_corner cursor_top_left2 `}
            style={{
              transform: clicked ? 'translate(420%, 120%)' : '',
              backgroundColor: clicked ? 'red' : '',
              transition: clicked ? 'transform 0.2s ease-in-out' : 'transform 0.2s ease-in-out'
            }}
          ></div>
          <div
            className={`cursor_corner cursor_top_right `}
            style={{
              transform: clicked ? 'translate(-150%, 350%)' : '',
              backgroundColor: clicked ? 'red' : '',
              transition: clicked ? 'transform 0.2s ease-in-out' : 'transform 0.2s ease-in-out'
            }}
          ></div>
          <div
            className={`cursor_corner cursor_top_right2 `}
            style={{
              transform: clicked ? 'translate(-420%, 120%)' : '',
              backgroundColor: clicked ? 'red' : '',
              transition: clicked ? 'transform 0.2s ease-in-out' : 'transform 0.2s ease-in-out'
            }}
          ></div>
          <div
            className={`cursor_corner cursor_bottom_left `}
            style={{
              transform: clicked ? 'translate(420%, -120%)' : '',
              backgroundColor: clicked ? 'red' : '',
              transition: clicked ? 'transform 0.2s ease-in-out' : 'transform 0.2s ease-in-out'
            }}
          ></div>
          <div
            className={`cursor_corner cursor_bottom_left2 `}
            style={{
              transform: clicked ? 'translate(150%, -350%)' : '',
              backgroundColor: clicked ? 'red' : '',
              transition: clicked ? 'transform 0.2s ease-in-out' : 'transform 0.2s ease-in-out'
            }}
          ></div>
          <div
            className={`cursor_corner cursor_bottom_right `}
            style={{
              transform: clicked ? 'translate(-420%, -120%)' : '',
              backgroundColor: clicked ? 'red' : '',
              transition: clicked ? 'transform 0.2s ease-in-out' : 'transform 0.2s ease-in-out'
            }}
          ></div>
          <div
            className={`cursor_corner cursor_bottom_right2 `}
            style={{
              transform: clicked ? 'translate(-150%, -350%)' : '',
              backgroundColor: clicked ? 'red' : '',
              transition: clicked ? 'transform 0.2s ease-in-out' : 'transform 0.2s ease-in-out'
            }}
          ></div>
          <div
            className="cursor_ball"
            style={{
              backgroundColor: clicked ? 'red' : '',
            }}
          ></div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Cursor;