import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './style.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storagedTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storagedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }

  function handleThemeToggle(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]); // Executa toda vez que o tema for atualizado

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#' aria-label='Menu' title='Menu'>
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Histórico' title='Histórico'>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Configurações' title='Configurações'>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Tema' title='Tema' onClick={handleThemeToggle}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
