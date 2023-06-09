import { ZooCard } from "./ZooCard"
import Users from './Users/index.jsx'
function App() {


  return (
    <>
      <div>
        <ZooCard 
        animalName="Jaguar" 
        animalImg="https://wallpaperaccess.com/full/244116.jpg"
        animalSound="/src/Jaguar Snap and Growl - QuickSounds.com.mp3"
         />
          <Users/>
      </div>
    </>
  )
}

export default App
