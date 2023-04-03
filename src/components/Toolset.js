import React, { Component } from 'react'
import './Toolset.css'
import figma from  '../assets/figma.png'
import blender from  '../assets/blender.png'
import ps from  '../assets/ps.png'
import xd from  '../assets/xd.png'
import react from  '../assets/reactjs.png'
class Toolset extends Component {
    state = {  } 
    render() { 
        return (
            <div className='toolset'>
                <p>TOOLSET</p>
                <div className='tool-row'>
                    <img src={blender} alt="" />
                    <img src={figma} alt="" />
                    <img src={xd} alt="" />
                    <img src={ps} alt="" />
                    <img src={react} alt="" />
                </div>
            </div>
        );
    }
}
 
export default Toolset;