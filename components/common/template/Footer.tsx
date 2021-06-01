import { Container, Row, Col } from "react-bootstrap";
import { LinkGitHub, LinkHome } from "../../../src/constants/pageInfo";

export const Footer = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col md="auto">
        <LinkHome></LinkHome> | © 2021 Seimei | <LinkGitHub></LinkGitHub>
      </Col>
    </Row>
  </Container>
);
