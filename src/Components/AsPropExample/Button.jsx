import styles from "./Button.module.css"

export default function Button({ As="button", size = "md", className = "", ...btnProps }) {
  return (
    <As
      {...btnProps}
      className={`${styles.btn} ${styles[size]} ${className}`}
    />
  )
}
