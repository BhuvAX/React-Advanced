import Card from "./Card"

export default function CompoundComponentExample() {
  return (
    <Card>
      <Card.Header>
        <h1 style={{ margin: "0" }}>Header</h1>
      </Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asseumenda quia
        eaque explicabo banditiis quibusdam, similique debitis earum sint non
        laboriosam dolorum ex itaque illum dolores?
      </Card.Body>
      <Card.Footer>
        <>
          <button>Ok</button>
          <button>Cancel</button>
        </>
      </Card.Footer>
    </Card>
  )
}
