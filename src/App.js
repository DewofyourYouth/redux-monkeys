import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <Container className="mt-4 text-center">
      <Row>
        <Col>
          <DispatchButton actionType="More" />
          <DispatchButton actionType="Less" />
          <DispatchButton actionType="Reset" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Monkeys />
        </Col>
      </Row>
      <DisplayMonkeyCount />
    </Container>
  );
}

function Monkeys() {
  const { monkeyCount } = useSelector((state) => state);
  return <h1>{"🐵".repeat(monkeyCount)}</h1>;
}

function DispatchButton({ actionType }) {
  const dispatch = useDispatch();
  return (
    <Button
      variant="primary"
      onClick={() => dispatch({ type: actionType.toUpperCase() })}
    >
      {actionType} Monkeys
    </Button>
  );
}

function DisplayMonkeyCount() {
  const { monkeyCount } = useSelector((state) => state);
  return (
    <Row>
      <Col>
        <h3 className="mt-3">{monkeyCount} Monkeys!</h3>
      </Col>
    </Row>
  );
}
