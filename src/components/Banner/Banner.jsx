import './BannerStyles.css'
import bannerImg from '../../assets/BannerImg.png'

const Banner = () => {
    return (
        <div>
            <div className='section1Outer'>
                <div className='subTextDiv'></div>
                <img className='mainImg' src={bannerImg} alt="" />
                <div className='mainTextDiv'></div>
            </div>
        </div>
    );
};

export default Banner;