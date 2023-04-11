import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! 👋 <br />
          I'm Sagar Rathod.
        </SectionTitle>
        <SectionText>
          ↣ Current: Software Engineer @ Atomic Object. <br />
          ↣ Previous: Senior Manager (Business Ops & IT Staffing) and Research
          Scientist (SCAs & HIV-1). <br />↣ Michigan State Grad. Go Green!
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://github.com/sagarbrathod1/resume/blob/main/Resume%20-%20Sagar%20Rathod.pdf/")
          }
        >
          Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
