import Ship from './components/Background/Ship'
// import Stars from './components/Background/Stars'
import Cursor from './components/Cursor'

import { useState } from 'react';

export default function App() {
  const [clicked, setClicked] = useState(false);

  const handleMouseDown = () => {
    setClicked(true);
  };

  const handleMouseUp = () => {
    setClicked(false);
  };

  return (
    <>
    <div 
      className='canvas' 
      style={{ width: '100vw', height: '100vh' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      >
      {/* <Stars/> */}
      <Ship/>
      <Cursor clicked={clicked} handleMouseDown={handleMouseDown} handleMouseUp={handleMouseUp} />
    </div>
    </>
  )
}