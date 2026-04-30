import { FiX } from 'react-icons/fi';
import ThemeToggleButton from '../common/ThemeToggleButton';
import type { SectionId, SectionMenu } from '../../constants/sectionMenus';
import './MobileMenu.css';

interface MobileMenuProps {
  menus: readonly SectionMenu[];
  activeMenu: SectionId;
  onClose: () => void;
  onMenuClick: (menuId: SectionId) => void;
}

export default function MobileMenu({
  menus,
  activeMenu,
  onClose,
  onMenuClick,
}: MobileMenuProps) {
  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu__overlay"
        onClick={onClose}
        aria-label="모바일 메뉴 닫기"
        type="button"
      />

      <aside className="mobile-menu__panel">
        <div className="mobile-menu__top">
          <ThemeToggleButton className="mobile-menu__theme" />

          <button
            className="mobile-menu__close"
            onClick={onClose}
            aria-label="모바일 메뉴 닫기"
            type="button"
          >
            <FiX />
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="모바일 메뉴">
          {menus.map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              className={activeMenu === menu.id ? 'is-active' : ''}
              onClick={() => onMenuClick(menu.id)}
            >
              {menu.label}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}