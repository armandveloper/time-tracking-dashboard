import { exercise, play, selfCare, social, study, work } from '@/svg';
import styles from './index.module.css';

type Props = {
  current: number;
  previous: number;
  timeframe: string;
  title: string;
};

const backgrounds = {
  Work: 'hsl(15, 100%, 70%)',
  Play: 'hsl(195, 74%, 62%)',
  Study: 'hsl(348, 100%, 68%)',
  Exercise: 'hsl(145, 58%, 55%)',
  Social: 'hsl(264, 64%, 52%)',
  'Self Care': 'hsl(43, 84%, 65%)',
};

const icons = {
  Work: work,
  Play: play,
  Study: study,
  Exercise: exercise,
  Social: social,
  'Self Care': selfCare,
};

const previousLabel = {
  Daily: 'Yesterday',
  Weekly: 'Last week',
  Monthly: 'Last Month',
};

export const Card = ({ current, previous, timeframe, title }: Props) => {
  return (
    <article
      className={styles.card}
      style={{
        backgroundColor: backgrounds[title as keyof typeof backgrounds],
      }}
    >
      <header className={styles.background}>
        <div className={styles.icon}>
          {icons[title as keyof typeof backgrounds]}
        </div>
      </header>
      <div className={styles.body}>
        <div className={styles.top}>
          <h2 className={styles.category}>{title}</h2>
          <button className={styles.viewMore}>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className={styles.grid}>
          <span className={styles.time}>{current}hrs</span>
          <span className={styles.lastWeek}>
            {previousLabel[timeframe as keyof typeof previousLabel]} -{' '}
            {previous}hrs
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
