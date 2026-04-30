import { FiMoon, FiSun } from 'react-icons/fi';
import useTheme from '../../hooks/useTheme';
import './ThemeToggleButton.css';

interface ThemeToggleButtonProps {
  className?: string;
}

export default function ThemeToggleButton({
  className = '',
}: ThemeToggleButtonProps) {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      className={className}
      onClick={toggleTheme}
      aria-label="테마 변경"
      type="button"
    >
      <span className="theme-toggle__icon" key={theme}>
        {isDark ? <FiSun /> : <FiMoon />}
      </span>
    </button>
  );
}