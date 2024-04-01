import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      console.log(hash);
      const scrollpart = document.querySelector(hash);
      console.log(scrollpart)
      if (scrollpart) {
        console.log("founf id");
        scrollpart.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return null;
};

export default ScrollToTop;
