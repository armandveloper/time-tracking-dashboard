import { TypeTimeframes } from '@/hooks';
import styles from './index.module.css';
import avatar from '@/assets/image-jeremy.png';

type Props = {
  timeframe: TypeTimeframes;
  setTimeframe: (timeframe: TypeTimeframes) => void;
};

const getActiveClassName = (
  name: TypeTimeframes,
  currentTimeframe: TypeTimeframes
) => (name === currentTimeframe ? styles.active : '');

const options = ['Daily', 'Weekly', 'Monthly'];

export const Sidebar = ({ timeframe, setTimeframe }: Props) => {
  const name = 'Jeremy Robson';

  const handleClick = (timeframe: TypeTimeframes) => {
    return () => setTimeframe(timeframe);
  };

  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <img className={styles.avatar} src={avatar} alt={name} />
        <div>
          <p className={styles.label}>Report for</p>
          <span className={styles.name}>{name}</span>
        </div>
      </header>
      <nav className={styles.nav}>
        {options.map(name => (
          <button
            key={name}
            className={`${styles.option} ${getActiveClassName(
              name as TypeTimeframes,
              timeframe
            )}`}
            onClick={handleClick(name as TypeTimeframes)}
          >
            {name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
