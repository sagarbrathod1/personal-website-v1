import React from "react";
import { DiFirebase, DiReact, DiPython } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListContainer>
        <ListTitle>Languages</ListTitle>
        <ListParagraph>
          Python · Java · C++ <br />
          JavaScript · TypeScript · HTML/CSS <br />
          Swift
        </ListParagraph>
      </ListContainer>
      <ListContainer>
        <ListTitle>Frameworks</ListTitle>
        <ListParagraph>
          React · Next · Node <br />
          React Native
        </ListParagraph>
      </ListContainer>
      <ListContainer>
        <ListTitle>Tools</ListTitle>
        <ListParagraph>
          Git · Expo · AWS <br />
          Prisma · tRPC <br />
          DynamoDB · MongoDB · PostgreSQL <br />
          GraphQL · Docker
        </ListParagraph>
      </ListContainer>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
