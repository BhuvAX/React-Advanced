import Button from "./Button.tsx"

export default function AsPropExample() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        alignItems: "flex-start",
      }}
    >
      <Button size="sm" disabled>Small</Button>
      <Button>Medium</Button>
      <Button size="lg">Large</Button>
      <Button As="a" href="/">Link</Button>
    </div>
  )
}
