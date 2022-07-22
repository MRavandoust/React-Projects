import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../../assets/au-feu.jpg";
import img2 from "../../assets/res.jpg";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className="content">
              <h2>BIENVENUE</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                voluptates magni natus voluptas cum, neque rem commodi,
              </p>
              <p>
                aspernatur qui ut id sequi, tempore autem aliquam cupiditate.
                Iste a recusandae, excepturi iusto molestias dicta aliquam
                doloribus vero vel, sunt rem debitis.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="images">
              <Image src={img2} width={350} fluid className="img2" />
              <Image src={img1} width={350} fluid className="img1" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
