import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Webixo</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked as a Frontend Developer at Webixo (2023–2024), building responsive web 
              interfaces and creating clean, modern designs for better user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FullStack Developer</h4>
                <h5>Yatra Go</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked as a FullStack Developer at Yatra Go (2024–2025), developing scalable 
              web applications, implementing backend services, and collaborating with 
              cross-functional teams to deliver high-quality software solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Head Dev</h4>
                <h5>Yuvan Creations</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently serving as the Technical Head Dev at Yuvan Creations (2025–Present),
              leading the development team, overseeing technical projects, and driving 
              innovation to create cutting-edge software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
