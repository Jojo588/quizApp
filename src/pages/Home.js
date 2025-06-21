import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
    <h1>Click on the start button to start quiz</h1>
    <Link to="/quiz" className="startButton">Start</Link>
    </div>
  )
}

export default Home