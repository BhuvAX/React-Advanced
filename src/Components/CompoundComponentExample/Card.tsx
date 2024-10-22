import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Card({ children }: Props) {
  return <div style={{ border: "1px solid black" }}>{children}</div>
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

type HeaderProp = {
  children: ReactNode
}

function Header({ children }: HeaderProp) {
  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding: ".5rem",
        marginBottom: ".5rem",
      }}
    >
      {children}
    </div>
  )
}

type BodyProp = {
  children: ReactNode
}

function Body({ children }: BodyProp) {
  return <div style={{ padding: ".5rem" }}>{children}</div>
}

type FooterProp = {
  children: ReactNode
}

function Footer({ children }: FooterProp) {
  return (
    <div
      style={{
        borderTop: "1px solid black",
        padding: ".5rem",
        marginTop: ".5rem",
      }}
    >
      {children}
    </div>
  )
}
