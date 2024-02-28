import './BannerStyles.css'
import bannerImg from '../../assets/BannerImg.png'
import vdo from '../../assets/Vdo.mp4'
const Banner = () => {
    return (
        <div>
            <div className='section1Outer'>
                <div className='subTextDiv'>
                    <div className='left'>
                        <div className='about text-white'>
                            <h2 className='text-5xl font-bold mb-4'>A Full Stack Developer</h2>
                            <p className='text-2xl lg:w-1/2'>Aspiring Entry-Level Full Stack Developer committed to driving impactful change in web development. With a passion for excellence and a drive for advancement..</p>
                        </div>
                    </div>
                    
                </div>
                <img className='mainImg' src={bannerImg} alt="Main Image" />
                <div className='mainTextDiv'>
                    <p>Hello I am</p>
                    <h1><span className='lg:mr-16'>Shahriar</span> Ahmmed</h1>
                </div>
                <video className='smokeVido' src={vdo} autoPlay loop muted></video>
            </div>
        </div>
    );
};

export default Banner;