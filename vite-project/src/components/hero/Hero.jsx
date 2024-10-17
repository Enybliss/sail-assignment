import './Hero.css'
import HeroImage from '../../assets/images/image-hero-desktop.png'
import ImageDatabiz from '../../assets/images/client-databiz.svg'
import ImageAudio from '../../assets/images/client-audiophile.svg'
import ImageMeet from '../../assets/images/client-meet.svg'
import ImageMaker from '../../assets/images/client-maker.svg'

const Hero =()=> {
    return(
      <div className='hero'>
            <div className='container'>
              <h1>Make remote work</h1>
              <p>Get your sync, no matter your location.Streamline processes,  create team rituals, and watch productivity soar. </p>
               <button>Learn more</button>

                <div className='Icons'>
                 <img src={ImageDatabiz} alt="" />
                  <img src={ImageAudio} alt="" />
                 <img src={ImageMeet} alt="" />
                 <img src={ImageMaker} alt="" />
               </div>


            </div>


           <div className='HeroImage'>
             <img src={HeroImage} alt="" />
          </div>
      </div>
    )
  }
  
  export default Hero