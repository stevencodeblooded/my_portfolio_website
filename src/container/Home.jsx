import Title from '../components/Home/Title/Title';
import TextContent from '../components/Home/TextContent/TextContent';
import SelfIntroduction from '../components/Home/SelfIntroduction/SelfIntroduction';
import Goal from '../components/Home/Goal/Goal';
import MarqueeContainer from '../components/Home/MarqueeContainer/MarqueeContainer';

const Home = () => {
  return (
    <div>
        <div className='navbar-margin'>
        </div>

        <div className='top-margin'>
          <Title />
          <SelfIntroduction />
          <TextContent />
          <Goal />
          <MarqueeContainer />
        </div>
    </div>
  )
}

export default Home