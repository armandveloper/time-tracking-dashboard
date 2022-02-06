import { Card, Sidebar } from '@/components';
import styles from './index.module.css';

export const Dashboard = () => {
  return (
    <div className={styles.grid}>
      <Sidebar />
      <main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
};

export default Dashboard;
