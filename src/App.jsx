import './App.css'
import ProfilePicture from './ProfilePicture'
import NameTitle from './NameTitle'
import Buttons from './Buttons'
import About from './About'
import Footer from './Footer'

function App() {
  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <ProfilePicture />
        <NameTitle />
        <Buttons />
        <About />        
        <Footer />        
      </div>      
    </div>
  )
}

export default App;
