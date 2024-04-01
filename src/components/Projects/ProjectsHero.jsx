import { useEffect } from "react";
import "../../styles/projects/hero.css";
import { useCarousel } from "../../hooks/useCarousel";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { projectCarousel } from "./asset";
import data from "./data.json";

const ProjectHero = () => {
  const { page, next, currentStepIndex } = useCarousel(projectCarousel.data);
  useEffect(() => {
    document
      .getElementById("parent-magestic-carousel")
      .addEventListener("mouseenter", function () {
        if (document.getElementById("cursor-following-div")) {
          document.getElementById("cursor-following-div").style.display =
            "block";
          document.addEventListener("mousemove", followMouse);
        }
      });

    document
      .getElementById("parent-magestic-carousel")
      .addEventListener("mouseleave", function () {
        if (document.getElementById("cursor-following-div")) {
          document.getElementById("cursor-following-div").style.display =
            "none";
          document.removeEventListener("mousemove", followMouse);
        }
      });
  }, []);

  function followMouse(e) {
    var childDiv = document.getElementById("cursor-following-div");
    var parentDiv = document.getElementById("parent-magestic-carousel");
    if (childDiv === null || parentDiv === null) return;
    var parentRect = parentDiv.getBoundingClientRect();
    const x = e.clientX - parentRect.left;
    const y = e.clientY - parentRect.top;
    const maxX = parentRect.width - childDiv.clientWidth;
    const maxY = parentRect.height - childDiv.clientHeight;

    const clampedX = Math.min(maxX, Math.max(0, x));
    const clampedY = Math.min(maxY, Math.max(0, y));
    childDiv.style.left = `${clampedX}px`;
    childDiv.style.top = `${clampedY}px`;
  }
  return (
    <>
      <div
        className="parent-magestic-carousel"
        id="parent-magestic-carousel"
        onClick={next}
      >
        <TransitionGroup style={{ height: "100%" }}>
          <CSSTransition
            key={currentStepIndex}
            timeout={1000}
            classNames="animated-carousel"
          >
            {page}
          </CSSTransition>
        </TransitionGroup>
        <div className="cursor-following-div" id="cursor-following-div">
          <div>
            <h3>{data.section1.cursor1}</h3>
            <h2>{data.section1.cursor2}</h2>
          </div>
        </div>
      </div>
      <div className="project-header-text">
        <h3>{data.section1.title}</h3>
        <h4>
          {data.section1.description}
          <span className="no-line-break">{data.section1.tagline}</span>
        </h4>
      </div>
    </>
  );
}

export default ProjectHero;