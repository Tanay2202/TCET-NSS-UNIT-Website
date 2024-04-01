import LeftQuote from "../../assets/static_images/quote-left-solid.svg";

const TestimonialCard = ({ testimonial, handleReadMoreClick }) => {
  return (
    <div className={`Testimonail-card`}>
      <div id="creator">
        <div id="image">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className="details">
          <h1 className="name">{testimonial.name}</h1>
          <p>
            {testimonial.post}
            {testimonial.council}
          </p>
        </div>
      </div>
      <div>
        <img src={LeftQuote} alt="left quote" className="leftquote" />
      </div>
      <div id="testimony">
        <p>
          {testimonial.Testimony.substring(0, 250)}
          {"... "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => handleReadMoreClick(testimonial)}
          >
            Read More
          </span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
