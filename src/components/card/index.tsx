import styles from './index.module.css';
import iconWork from '@/assets/icon-work.svg';

export const Card = () => {
  return (
    <article className={styles.card}>
      <header className={styles.background}>
        <img className={styles.icon} src={iconWork} alt="" />
      </header>

      <div className={styles.body}>
        <div className={styles.top}>
          <h2 className={styles.category}>Work</h2>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className={styles.grid}>
          <span className={styles.time}>32hrs</span>
          <span className={styles.lastWeek}>Last Week - 36hrs</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
