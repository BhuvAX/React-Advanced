import Child from "./Child"
import styles from "./parent.module.css"

export default function CssModulesExample() {
  return (
    <>
      <h1 className={`${styles.header} ${styles.headerLighter}`}  >Parent</h1>
      <Child />
    </>
  )
}
