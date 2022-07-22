import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../../assets/dorade.jpg";
import "./SingleCard.css";

const SingleCard = () => {
  return (
    <div className="singleCard">
      <img
        src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
        alt=""
      />
      <div className="cardBody">
        <h3>Dorade Royale</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          quisquam voluptas modi iusto error adipisci nulla.
        </p>
        <button className="btn btn-danger" style={{ borderRadius: "0" }}>
          Commander
        </button>
      </div>
    </div>

    // <Card
    //   style={{ width: "18rem", borderRadius: "0", padding: "0", margin: "0" }}
    // >
    //   <Card.Img variant="top" src={img} style={{ borderRadius: "0" }} />
    //   <Card.Body>
    //     <Card.Title>DORADE ROYALE</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="danger" style={{ borderRadius: "0" }}>
    //       Commander
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
};

export default SingleCard;
