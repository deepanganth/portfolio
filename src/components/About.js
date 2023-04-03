import "../components/About.css";
import Navbar from "./Navbar";
import Toolset from "./Toolset";
function About() {
  return (
    <>
      <Navbar />
      <div className="section-2">
        <div className="section-2-left">
          <div className="about">
            <p>----What I Do</p>
            <p>I enjoy creating delightful,</p>
            <p>human-centered digital experience</p>
          </div>
          <div className="quotes">
            <p>
              {" "}
              <span>Think.</span> <span>Make.</span>{" "}
            </p>
            <p>
              {" "}
              <span>Solve.</span>{" "}
            </p>
          </div>
        </div>
        <div className="section-2-right">
          <div className="circle"></div>
        </div>
      </div>
      <div className="bio">
        <div className="bio-about">
            <p>BIOGRAPHY</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Deepanganth, a third-year Computer Science student with a
            passion for web design and 3D graphics. I'm a certified graphic and
            web designer.
            <br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My software skills include Blender, Figma, Adobe Photoshop, and
            Adobe XD.
            I aspire to become the best 3D graphics web designer, and
            believe my diverse range of skills and experience make me an ideal
            candidate for any web or 3D graphics project.I look forward to
            collaborating with you!
          </p>
        </div>
      </div>
      <Toolset/>
    </>
  );
}

export default About;
