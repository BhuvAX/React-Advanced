import PropTypes from "prop-types"

export default function Child({ name, age, children }) {
  return (
    <div>
      <strong>Name: </strong> {name}
      <br />
      <strong>Age: </strong> {age}
      <br />
      <strong>Age (in 10 years):</strong> {age + 10}
      <p>{children}</p>
    </div>
  )
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  age: PropTypes.number,
  children: PropTypes.node
}
