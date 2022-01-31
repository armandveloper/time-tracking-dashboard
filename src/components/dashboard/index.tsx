import styles from './index.module.css';

export const Dashboard = () => {
  return (
    <div className={styles.grid}>
      <aside>
        <h2>Sidebar</h2>
      </aside>
      <main>
        <h1>Categories</h1>
      </main>
    </div>
  );
};

export default Dashboard;
