import React from "react";
import "semantic-ui-css/semantic.min.css";

import Header from "./header";
import { Container } from "semantic-ui-react";
export default (props) => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Header />
      {props.children}
    </Container>
  );
};
