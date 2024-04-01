import React from "react";
import { useEffect } from "react";
import { Map } from "../components/Common/index";
import Socials from "../components/Common/Socials";
import Chairperson from "../components/Team/chairperson";
import Images from "../assets/team/index";
import ProgramOfficer from "../components/Team/programOfficer";
import DeputyProgramOfficer from "../components/Team/deputyprogramOfficer";
import Scroller from "../components/Scroller";
import JcContainer from "../components/TeamCardcontainer";
import TeamCreativeTeam from "../components/TeamCreativeTeam";

const Team = () => {
  useEffect(() => {
    document.title = "Teams | TCET NSS UNIT";
  });

  return (
    <div>
      <Chairperson />
      <ProgramOfficer />
      <DeputyProgramOfficer />
      <Scroller />
      <JcContainer />
      <TeamCreativeTeam
        simple_image={Images.Tech_reduced}
        hd_image={Images.Tech}
        name={"Technical Team"}
        text={"Excellence in Execution, Professionalism in Service"}
      />
      <TeamCreativeTeam
        simple_image={Images.Creative_reduced}
        hd_image={Images.Creative}
        name={"Creatives Team"}
        text={
          "Creativity is Seeing what others see and Thinking what noone else ever though"
        }
      />
      <TeamCreativeTeam
        simple_image={Images.Creative_reduced}
        hd_image={Images.councilandPo}
        name={"Pillars of TCET NSS UNIT"}
        text={"TCET NSS: Empowering Change, One Heartbeat at a Time."}
      />
      <Socials />
      <Map />
    </div>
  );
};

export default Team;
