import "../../styles/button.css";

const CallButton = ({nav, to}) => {
  return <button className="c-t-a-button" onClick={() => nav(to)}>Learn More</button>;
};

export default CallButton;
