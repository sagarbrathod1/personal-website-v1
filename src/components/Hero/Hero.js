import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! 👋 <br /> 
          I'm Sagar Rathod.
        </SectionTitle>
        <SectionText>
          Software Engineering Fellow @ Headstarter. <br /> 
          Michigan State University Alumnus.
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com/'} >Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;