import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const assetBase = `${import.meta.env.BASE_URL}images/`;

const works = [
  {
    title: "Yatra Go",
    type: "Travel Website",
    stack: "HTML, CSS, JavaScript",
    image: `${assetBase}YatraGo.png`,
    alt: "Yatra Go project preview",
    link: "https://yatrago.com/index.html",
  },
  {
    title: "Vihan Tour & Travels",
    type: "Travel Website",
    stack: "HTML, CSS, JavaScript",
    image: `${assetBase}VihanTravels.png`,
    alt: "Vihan Tour & Travels project preview",
    link: "https://yuvancreations.github.io/vihaantourandtravels/",
  },
  {
    title: "Speedo",
    type: "Taxi Booking Website & APP",
    stack: "React, Vite, Firebase, Authentication, Payment Gateway",
    image: `${assetBase}Speedo.png`,
    alt: "Speedo project preview",
    link: "https://yuvancreations.github.io/speedo/#/",
  },
  {
    title: "Yuvan Creations",
    type: "IT Services Website",
    stack: "React, Tailwind, Framer Motion, Firebase, Authentication, Payment Gateway",
    image: `${assetBase}Yuvancreations.png`,
    alt: "Yuvan Creations project preview",
    link: "https://yuvancreations.github.io/yuvancreations/",
  },
  {
    title: "Verma Mobile Gallery",
    type: "Ecommerce Website",
    stack: "React, Nodejs, Authentication",
    image: `${assetBase}VMG.png`,
    alt: "Verma Mobile Gallery project preview",
    link: "https://vermamobilegallery10.github.io/VMG/",
  },
  {
    title: "School Tracking Application",
    type: "Kids Tracking App",
    stack: "For Android & IOS, Students Live Location, Flutter, Kotlin, Firebase, Authentication, Google Maps API",
    image: `${assetBase}SchoolApp.png`,
    alt: "School Tracking Application project preview",
    link: "https://yuvancreations.github.io/yuvancreations/",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const workContainer = document.querySelector(".work-container");
      if (!box.length || !workContainer) return;

      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = Math.max(
        rect.width * box.length - (rectLeft + parentWidth) + padding,
        0
      );
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {works.map((work, index) => (
            <div className="work-box" key={work.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{work.title}</h4>
                    <p>{work.type}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{work.stack}</p>
              </div>
              <WorkImage image={work.image} alt={work.alt} link={work.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
