import { useEffect, useRef, useState } from "react";
import "../../styles/home/achievements.css";
import useScrollVisibility from "../../hooks/useScrollAnimation";
import data from "./data.json";
import { achievementData } from "./asset";

export default function Achievements() {
  const achievementsTitleRef = useRef(null);
  const sliderRef = useRef(null);
  const { isVisible } = useScrollVisibility(achievementsTitleRef, sliderRef);

  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const finalValues = [18, 196000, 1450, 600 * 80];
    const increments = [1, 3920, 600, 3000];
    if (!isVisible) return;

    const timers = finalValues.map((_, index) => {
      const incrementCounter = () => {
        setCounters((prevCounters) => {
          if (prevCounters[index] < finalValues[index]) {
            const newCounters = [...prevCounters];
            newCounters[index] = Math.min(
              prevCounters[index] + increments[index],
              finalValues[index]
            );
            return newCounters;
          }
          return prevCounters;
        });
      };

      return setInterval(incrementCounter, 160);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  return (
    <div
      className={`home-achievements ${isVisible ? "appear" : ""}`}
      ref={achievementsTitleRef}
    >
      <h2
        className={
          isVisible ? "home-domains-header home-achievements-header" : ""
        }
        ref={sliderRef}
      >
        {data.section5.title}
      </h2>
      <p>{data.section5.description}</p>
      <div className="home-achievements-incrementer">
        {achievementData.map(({ title, image, unit }, index) => (
          <div key={index} className="achievement">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <div className="incrementer make-flex">
              <div className="incrementer">
                <p className="counter-incrementer">{counters[index].toLocaleString()}</p>
              </div>
              <p>{unit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
