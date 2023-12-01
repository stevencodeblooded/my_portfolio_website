import Marquee from 'react-fast-marquee'
import './MarqueeContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGit, faGithub, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import mongoDB from '../../../assets/mongoDB.jpeg'
import typescriptIcon from '../../../assets/typeScript_logo.png'
import tailwindCSS from '../../../assets/tailwindcss_logo_icon_170649.png'

const MarqueeContainer = () => {
  return (
    <div className='marquee-container'>
        <Marquee pauseOnHover={true} gradient={true} gradientColor={'lightblue'} autoFill={true} >
            <div className='icons-type'>
                <FontAwesomeIcon icon={faReact} className='individual-icons' />
                <h3 className='title-lng'>React JS</h3>
            </div>
            <div className='icons-type'>
                <FontAwesomeIcon icon={faHtml5} className='individual-icons' />
                <h3 className='title-lng'>HTML</h3>
            </div>
            <div className='icons-type'>
                <FontAwesomeIcon icon={faCss3} className='individual-icons' />
                <h3 className='title-lng'>CSS</h3>
            </div>
            <div className='icons-type'>
                <FontAwesomeIcon icon={faJs} className='individual-icons' />
                <h3 className='title-lng'>Java Script</h3>
            </div>
            <div className='icons-type'>
                <FontAwesomeIcon icon={faNode} className='individual-icons' />
                <h3 className='title-lng'>Node JS</h3>
            </div>
            <div className='icons-type'>
                <img src={mongoDB} alt="mongoDB icon" className='logo-img' />
                <h3 className='title-lng'>Mongo DB</h3>
            </div>
            <div className='icons-type'>
                <FontAwesomeIcon icon={faGit} className='individual-icons' />
                <h3 className='title-lng'>Git</h3>
            </div>
            <div className='icons-type'>
                <img src={typescriptIcon} alt="typescript icon" className='logo-img' />
                <h3 className='title-lng'>TypeScript</h3>
            </div>
            <div className='icons-type'>
                <img src={tailwindCSS} alt="TailwindCSS" className='logo-img' />
                <h3 className='title-lng'>TailwindCSS</h3>
            </div>
            <div className='icons-type'>
                <FontAwesomeIcon icon={faGithub} className='individual-icons' />
                <h3 className='title-lng'>GitHub</h3>
            </div>
        </Marquee>
    </div>
  )
}

export default MarqueeContainer