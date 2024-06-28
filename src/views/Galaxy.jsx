import Ship from './components/Background/Ship'
import Stars from './components/Background/Stars'
import Cursor from './components/Cursor/Cursor'

export default function App() {
  return (
    <>
      <div 
        className='canvas' 
        style={{ width: '100vw', height: '100vh' }}
      >
        <Stars/>
        <Ship/>
        <Cursor />
      </div>
    </>
  )
}
