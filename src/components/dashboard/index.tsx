import { Card, Sidebar } from '@/components';
import { useTimeframe } from '@/hooks';
import data from '@/data.json';
import styles from './index.module.css';

export const Dashboard = () => {
  const [timeframe, setTimeframe] = useTimeframe();

  return (
    <div className={styles.grid}>
      <Sidebar timeframe={timeframe} setTimeframe={setTimeframe} />
      <main>
        {data.map(({ title, timeframes: { [timeframe]: _timeframe } }) => (
          <Card
            key={title}
            current={_timeframe.current}
            previous={_timeframe.previous}
            timeframe={timeframe}
            title={title}
          />
        ))}
      </main>
    </div>
  );
};

export default Dashboard;
