import './BannerStyles.css'
import bannerImg from '../../assets/BannerImg.png'
import secondVdo from '../../assets/secondVdo.mp4'
const Banner = () => {
    return (
        <div>
            <div className='section1Outer'>
                <div className='subTextDiv'>
                    <div className='left'>
                        <div className='about'>
                            <p>I am a Full Stack Developer</p>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='stat'>
                            <h1>30+</h1>
                            <p>Happy Clients</p>
                        </div>
                        <div className='stat'>
                            <h1>5+</h1>
                            <p>Years Experience </p>
                        </div>
                    </div>
                </div>
                <img className='mainImg' src={bannerImg} alt="" />
                <div className='mainTextDiv'>
                    <p>Hello I am</p>
                    <h1><span className='lg:mr-16'>Shahriar</span> Ahmmed</h1>
                </div>
                <video className='smokeVido' src={secondVdo} autoPlay loop muted></video>
            </div>
        </div>
    );
};

export default Banner;