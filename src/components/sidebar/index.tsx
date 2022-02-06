import styles from './index.module.css';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <a className={styles.link} href="!#">
          Daily
        </a>
        <a className={styles.link} href="!#">
          Weekly
        </a>
        <a className={styles.link} href="!#">
          Monthly
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
