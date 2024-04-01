import { useEffect, useRef } from "react";
import "../../styles/about/hero.css";
import { history } from "./asset";

export default function AboutHero() {
  const councilCarousel = useRef(null);
  useEffect(() => {
    var slide = 0;
    setInterval(() => {
      if (councilCarousel.current !== null)
        councilCarousel.current.style.transform = `translateX(${
          slide * -100
        }%)`;
      if (
        councilCarousel.current &&
        slide === councilCarousel.current.childElementCount - 1
      ) {
        return (slide = 0);
      }
      return (slide += 1);
    }, 5000);
  }, []);
  return (
    <div className="council-carousel">
      <div className="counc-carousel" ref={councilCarousel}>
        {history.map((cocl, idx) => (
          <div key={"about-hero " + idx} className="council">
            <div className="council-text">
              <h2>{cocl.name} <span style={{textWrap: "nowrap"}}>{cocl.year}</span></h2>
              <p>{cocl.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
