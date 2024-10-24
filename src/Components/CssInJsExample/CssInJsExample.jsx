import Child from "./Child"
import styled from "styled-components"

const RedHOne = styled.h1`
  color: red;
`

export default function CssInJsExample() {
  return (
    <>
      <RedHOne>Parent</RedHOne>
      <Child />
    </>
  )
}
