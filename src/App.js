import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import { NavbarFooter } from "./templates/NavbarFooter";
import { NavbarOnly } from "./templates/Navbar";
import ScrollToTop from "./utills/ScrollToTop";
import {
  Developers,
  About,
  Team,
  Testimonial,
  Projects,
  Home,
  ImageGallery,
} from "./pages/index";
import { LoaderStart, SlowInternet } from "./components/Loaders/index";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app_container">
      <LoaderStart />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<SlowInternet />}>
          <Routes>
            <Route element={<NavbarFooter phase={3} />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route element={<NavbarFooter phase={1} />}>
              <Route path="/developers" element={<Developers />} />
              <Route path="/team" element={<Team />} />
            </Route>
            <Route element={<NavbarOnly phase={3} />}>
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/projects/:id" element={<Projects />} /> */}
            </Route>
            <Route element={<NavbarOnly phase={1} />}>
              <Route path="/testimonials" element={<Testimonial />} />
              <Route path="/imagegallery" element={<ImageGallery />} />
            </Route>
            <Route element={<NavbarFooter phase={1} />} >
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
