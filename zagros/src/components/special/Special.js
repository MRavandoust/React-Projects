import "./Special.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SingleCard from "../singleCard/SingleCard";

const Special = () => {
  return (
    <>
      <div className="special">
        <div className="overlay"></div>
        <Container fluid="md" className="contWrap">
          <Row>
            <Col>
              <h2>SPECIAL ISTANBUL</h2>
            </Col>
          </Row>
          <Row className="cont">
            <Col>
              <SingleCard />
            </Col>
            <Col>
              <SingleCard />
            </Col>
            <Col>
              <SingleCard />
            </Col>
            <Col>
              <SingleCard />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Special;
