import React, { Component } from 'react'
import '../components/work.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import frame from '../assets/grunge-frame.png'
import w1 from '../assets/w1.jpg'
import w2 from '../assets/w2.jpg'
import w3 from '../assets/w3.jpg'
import Navbar from './Navbar';

class Work extends Component {
    componentDidMount() {
        AOS.init();
    }
    state = {}
    render() {
        return (
            <div className='work'>
                <Navbar/>
                <div className='w-main'>
                    <h6> </h6>
                    <Link to="/web-project" className="w-box" data-aos="fade-right">
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={w1} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>WEB PROJECTS</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/uiux" className="w-box" data-aos="fade-right">
                        <div className='w-box' data-aos="fade-left">
                            <div className='des'>
                                <p>UI / UX DESIGN</p>
                            </div>
                            <div className='project'>
                                <img src={w2} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/photoshop" className="w-box" data-aos="fade-right" >
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={w3} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>PHOTOSHOP</p>
                            </div>
                        </div>
                    </Link>            
                </div>
            </div>
        );
    }
}

export default Work;