import teamNSS from "../../assets/home/team-NSS.jpg"
import teamNSSReduced from "../../assets/home_reduced/team_NSS.webp"
import Image from "../../containers/Image"
import "../../styles/home/hero.css";
import data from "./data.json"
 
const Hero = () => {
  return (
    <div id="hero"  className='hero-section'>
        <Image simple_image={teamNSSReduced} HD_image={teamNSS} alt="NSS Team "/>
        <div className='hero-text'>
            <h2>{data.title}</h2>
            <h3>{data.titleDescription}</h3>
        </div>
    </div>
  )
}
export default Hero
