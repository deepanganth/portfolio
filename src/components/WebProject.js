import Navbar from './Navbar';
import '../components/work.css'
import frame from '../assets/grunge-frame.png'
import { Link } from 'react-router-dom';
import p1 from '../assets/p1.gif'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.gif'
import p4 from '../assets/p4.gif'
import p5 from '../assets/p5.gif'
import p6 from '../assets/p6.gif'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.jpg'
import p9 from '../assets/p9.gif'

function WebProject(){
    return(
        <div className='work'>
                <Navbar />
                <div className='w-main'>
                    <h6>WEB PROJECT</h6>
                    <Link to="https://deepanganth.github.io/kit-virtual-tour/" className="w-box" data-aos="fade-right" target="_blank" rel="noopener noreferrer">
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={p6} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>Campus Virtual Tour</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://deepanganth.github.io/PBT/" className="w-box" data-aos="fade-right" target="_blank" rel="noopener noreferrer">
                        <div className='w-box' data-aos="fade-left">
                            <div className='des'>
                                <p>Police Bandobast Tracker</p>
                            </div>
                            <div className='project'>
                                <img src={p7} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link to="https://deepanganth.github.io/vr-shop/" className="w-box" data-aos="fade-right" target="_blank" rel="noopener noreferrer">
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={p9} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>VR shopping App</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://deepanganth.github.io/weather-app/" className="w-box" data-aos="fade-right" target="_blank" rel="noopener noreferrer">
                        <div className='w-box' data-aos="fade-left">
                            <div className='des'>
                                <p>Weather Monitoring App</p>
                            </div>
                            <div className='project'>
                                <img src={p8} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link to="https://deepanganth.github.io/joke-generator/" className="w-box" data-aos="fade-right" target="_blank" rel="noopener noreferrer">
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={p1} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>Joke Generator Web Application</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://docs.google.com/presentation/d/1PWtpfQESVw2FnOpqC1aV8UOV01f1XlBuXf7bSJmLTRY/edit?usp=sharinghttps://deepanganth.github.io/vr-shop/" className="w-box" data-aos="fade-right" target="_blank" rel="noopener noreferrer">
                        <div className='w-box' data-aos="fade-left">
                            <div className='des'>
                                <p>3D Printing of Edible vegan Meat</p>
                            </div>
                            <div className='project'>
                                <img src={p2} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link to="https://deepanganth.github.io/portfolio/" className="w-box" data-aos="fade-right" target="_blank" rel="noopener noreferrer">
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={p3} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>3D portfolio React-Three-fiber</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://deepanganth.github.io/img-pdf/" className="w-box" data-aos="fade-right" target="_blank" rel="noopener noreferrer">
                        <div className='w-box' data-aos="fade-left">
                            <div className='des'>
                                <p>Image to pdf web Application</p>
                            </div>
                            <div className='project'>
                                <img src={p4} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link to="https://deepanganth.github.io/Dravel/" className="w-box" data-aos="fade-right" target="_blank" rel="noopener noreferrer">
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={p5} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>Hotel Management system web Application</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
    );
}

export default WebProject;