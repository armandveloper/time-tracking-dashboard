import styles from './index.module.css';
import avatar from '@/assets/image-jeremy.png';

export const Sidebar = () => {
  const name = 'Jeremy Robson';

  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <img className={styles.avatar} src={avatar} alt={name} />
        <div>
          <p>Report for</p>
          <span>{name}</span>
        </div>
      </header>
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
