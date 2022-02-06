import { Sidebar } from '@/components';
import styles from './index.module.css';

export const Dashboard = () => {
  return (
    <div className={styles.grid}>
      <Sidebar />
      <main>
        <h1>Categories</h1>
      </main>
    </div>
  );
};

export default Dashboard;
