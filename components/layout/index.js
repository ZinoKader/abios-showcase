import styles from "./layout.module.css";

const Layout = (props) => <div className={styles.root}>{props.children}</div>;

export default Layout;
