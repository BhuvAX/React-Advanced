import { ComponentPropsWithoutRef, ElementType } from "react"
import styles from "./Button.module.css"

type ButtonProps<T extends ElementType> = {
  As?: T
  size?: "sm" | "md" | "lg"
} & ComponentPropsWithoutRef<T>

export default function Button<T extends ElementType = "button">({
  As,
  size = "md",
  className = "",
  ...btnProps
}: ButtonProps<T>) {
   const Component = As ?? "button"
  return (
    <Component
      {...btnProps}
      className={`${styles.btn} ${styles[size]} ${className}`}
    />
  )
}
