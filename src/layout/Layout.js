import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";
import Konami from "../components/konami";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Konami
        sequence={[
          "ArrowUp",
          "ArrowUp",
          "ArrowDown",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "ArrowLeft",
          "ArrowRight",
          "KeyB",
          "KeyA",
        ]}
      ></Konami>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
