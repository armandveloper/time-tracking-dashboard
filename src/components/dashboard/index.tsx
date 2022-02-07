import { Card, Sidebar } from '@/components';
import data from '@/data.json';
import styles from './index.module.css';

export const Dashboard = () => {
  return (
    <div className={styles.grid}>
      <Sidebar />
      <main>
        {data.map(({ title, timeframes: { daily } }) => (
          <Card
            key={title}
            current={daily.current}
            previous={daily.previous}
            timeframe="Daily"
            title={title}
          />
        ))}
      </main>
    </div>
  );
};

export default Dashboard;
