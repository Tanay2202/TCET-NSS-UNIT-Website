import "../styles/testimonial/testimonials.css";
import TestimonialList from "../components/Testimonial/TestimonialsList";
import { useEffect } from "react";


export default function Testimonial() {
  useEffect(() => {
    document.title = "Testimonials | TCET NSS UNIT";
  })

  return (
    <TestimonialList />
  );
}
