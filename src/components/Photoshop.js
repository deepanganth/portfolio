import '../components/work.css';
import 'aos/dist/aos.css';
import frame from '../assets/grunge-frame.png'
import ps1 from '../assets/ps1.gif'
import ps2 from '../assets/ps2.jpg'
import ps3 from '../assets/ps3.gif'
import ps4 from '../assets/ps4.jpg'
import Navbar from './Navbar';

function Photoshop(){
    return(
        <div className='work'>
                <Navbar />
                <div className='w-main'>
                    <h6>PHOTOSHOP</h6>
                    <div className='w-box' data-aos="fade-left">
                        <div className='des'>
                            <p>Being an artist is scary and requires tremendous bravery....</p>
                        </div>
                        <div className='project'>
                            <img src={ps1} alt="" />
                            <img src={frame} alt="" />
                        </div>
                    </div>
                    <div className='w-box' data-aos="fade-right">
                        <div className='project'>
                            <img src={ps2} alt="" />
                            <img src={frame} alt="" />
                        </div>
                        <div className='des'>
                            <p>Only elephants should own ivory 🐘</p>
                        </div>
                    </div>
                    <div className='w-box' data-aos="fade-left">
                        <div className='des'>
                            <p>Neighbours not, Aliens at tajmahal........</p>
                        </div>
                        <div className='project'>
                            <img src={ps3} alt="" />
                            <img src={frame} alt="" />
                        </div>
                    </div>
                    <div className='w-box' data-aos="fade-right">
                        <div className='project'>
                            <img src={ps4} alt="" />
                            <img src={frame} alt="" />
                        </div>
                        <div className='des'>
                            <p>Earth inside the plastic</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Photoshop;