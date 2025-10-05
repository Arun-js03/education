import React from 'react'
import './Home.css'
import banner_inside1 from '../../assets/BannerImage1.png';
import banner_inside2 from '../../assets/BannerImage2.png';
import banner_inside3 from '../../assets/BannerImage3.png';

 
function Home() {
  return (
    <div className='bg-banner-home'>
      <div className='container'> 
            <div className='banner-grd'>
                <div>
                    <h1>Lorem ipsum dolor sit ecte mattisquam</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Vel sit mattis pellentesque malesuada nunc ut. Leo arcu turpis platea nunc amet vestibulum quam. Sit mi faucibus </p>
                    <div className='banner-anchr'>
                        <a href="#">Register Now</a>
                        <a href="#">About Us</a>
                    </div>
                </div>
                <div>
                    <div className='inside-flx'>
                        <div><img className='bannerin-1' src={banner_inside1} alt="" /></div>
                        <div className='widt-img'>
                            <img className='bannerin-2' src={banner_inside2} alt="" />
                            <img className='bannerin-2' src={banner_inside3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Home
