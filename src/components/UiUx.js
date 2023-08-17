import Navbar from './Navbar';
import '../components/work.css'
import frame from '../assets/grunge-frame.png'
import uiux1 from '../assets/uiux1.gif'
import uiux2 from '../assets/uiux2.jpg'
import uiux3 from '../assets/uiux3.gif'
import uiux4 from '../assets/uiux4.jpg'
import uiux5 from '../assets/uiux5.gif'

function UiUx(){
    return(
        <div className='work'>
                <Navbar />
                <div className='w-main'>
                    <h6>UI / UX</h6>
                    <div className='w-box' data-aos="fade-left">
                        <div className='des'>
                            <p>Shoe Store Ecommerce</p>
                        </div>
                        <div className='project'>
                            <img src={uiux1} alt="" />
                            <img src={frame} alt="" />
                        </div>
                    </div>
                    <div className='w-box' data-aos="fade-right">
                        <div className='project'>
                            <img src={uiux2} alt="" />
                            <img src={frame} alt="" />
                        </div>
                        <div className='des'>
                            <p>Travel Agency Landing Page Concept</p>
                        </div>
                    </div>
                    <div className='w-box' data-aos="fade-left">
                        <div className='des'>
                            <p>E-commerce isn't cherry on the cake, it's new cake</p>
                        </div>
                        <div className='project'>
                            <img src={uiux3} alt="" />
                            <img src={frame} alt="" />
                        </div>
                    </div>
                    <div className='w-box' data-aos="fade-right">
                        <div className='project'>
                            <img src={uiux4} alt="" />
                            <img src={frame} alt="" />
                        </div>
                        <div className='des'>
                            <p>Socks Store Ecommerce</p>
                        </div>
                    </div>
                    <div className='w-box' data-aos="fade-left">
                        <div className='des'>
                            <p>E-bike Store Ecommerce</p>
                        </div>
                        <div className='project'>
                            <img src={uiux5} alt="" />
                            <img src={frame} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default UiUx;