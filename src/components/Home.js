import "./Home.css";
import Navbar from "./Navbar";
import Home3d from "./Home3d";
import round from '../assets/round-logo.png';
function Home() {
  return (
    <section className="home-section">
      <Navbar />
      <div className="home-about">
        <p>HELLO, I'M</p>
        <p>DEEPAN GANTH </p>
        <p>3D GRAPHIC DESIGNER</p>
      </div>
      <div className="home-foot">
        <a href="https://dribbble.com/dev_deepan" target="_blank" rel="noreferrer"><p>Dribbble</p></a>
        <a href="https://www.linkedin.com/in/deepan-ganth/" target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
        <a href="https://github.com/deepanganth" target="_blank" rel="noreferrer"><p>Github</p></a>
      </div>
      <div className="home3dbox">
        <Home3d />
      </div>
      <img className="round-logo" src={round} alt="" />
    </section>
  );
}

export default Home;
