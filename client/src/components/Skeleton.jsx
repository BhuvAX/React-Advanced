import { Fragment } from "react"

export function Skeleton({ short, inline }) {
  return (
    <div
      className="skeleton"
      style={{
        width: short ? "15em" : undefined,
        display: inline ? "inline-block" : undefined,
      }}
    ></div>
  )
}

export function SkeletonButton() {
  return <div className="skeleton skeleton-btn"></div>
}

export function SkeletonInput() {
  return <div className="skeleton skeleton-input"></div>
}

export function SkeletonList({ count, children }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </>
  )
}
