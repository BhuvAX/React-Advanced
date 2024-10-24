import styled from "styled-components"

const BlueHOne = styled.h1`
  color: ${(props) => props.color};
  &:hover {
    color: green;
  }
`

export default function Child() {
  return <BlueHOne color="blue">Child</BlueHOne>
}
