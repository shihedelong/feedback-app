import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Card>
      <div className='about'>
        <h2>This is the app about react and feedback</h2>
        <p>Version 1.0</p>
      </div>
      <Link to='/'>go back</Link>
    </Card>
  )
}

export default About
