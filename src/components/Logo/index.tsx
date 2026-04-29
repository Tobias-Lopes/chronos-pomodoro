import { TimerIcon } from 'lucide-react';
import styles from './style.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <TimerIcon />
        <span>POMODORO</span>
      </a>
    </div>
  );
}
