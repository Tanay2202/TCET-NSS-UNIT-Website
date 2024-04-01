import { useEffect } from "react";
import { ProjectHero, ViewImageGallery, ProjectDisplay } from "../components/Projects/index";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | TCET NSS UNIT"
  })
  return (
    <>
      <ProjectHero />
      <ProjectDisplay />
      <ViewImageGallery />
    </>
  );
}
