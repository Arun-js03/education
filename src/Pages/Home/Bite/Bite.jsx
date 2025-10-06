import React from 'react'
import './Bite.css'
import bite_img from "../../../assets/Groupa45481.png"
import history_img from "../../../assets/history.png"
import Academic_img from "../../../assets/Academic.png"
import Innovation_img from "../../../assets/Innovation.png"
import Faculty_img from "../../../assets/Faculty.png"


function Bite() {
  return (
    <div className='container'>
      <div className='bite-grd'>
            <div><img src={bite_img} alt="" /></div>
            <div className='welcome-bte'>
                <h2>Welcome to BITE</h2>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Vel sit mattis pe llent esque malesuada nunc ut. Leo arcu turpis platea nunc amet vestibulum quam.  Sit mi faucibus lectus euismod fusce. Quis sit metus sit convallis amet ornare lorem nibh. Lorem ipsum dolor sit amet consectetur</p>
                <div className="history-grd"> 
                    <div className='hist-pink'><img  src={history_img} alt="" /><h4>History</h4></div>
                     <div className='hist-blue'><img src={Academic_img} alt="" /><h4>Academic</h4></div>
                </div>
                <div className="history-grd">
                    <div className='hist-orange'><img src={Innovation_img} alt="" /><h4>Innovation</h4></div>
                     <div className='hist-green'><img src={Faculty_img} alt="" /><h4>Faculty</h4></div>
                </div>
                <div className='read-mr'><a href="#">Read More</a></div>
            </div>
      </div>
    </div>
  )
}

export default Bite
