import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import ThemeToggleButton from '../common/ThemeToggleButton';
import useActiveMenu from '../../hooks/useActiveMenu';
import MobileMenu from './MobileMenu';
import { sectionMenus } from '../../constants/sectionMenus';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { activeMenu, handleMenuClick } = useActiveMenu({
    menus: sectionMenus,
    defaultActiveMenu: 'about',
  });

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <button className="header__logo" onClick={handleLogoClick} type="button">
            kimkaaa.dev
          </button>

          <nav className="header__nav" aria-label="메인 메뉴">
            {sectionMenus.map((menu) => (
              <a
                key={menu.id}
                href={`#${menu.id}`}
                className={activeMenu === menu.id ? 'is-active' : ''}
                onClick={() => handleMenuClick(menu.id)}
              >
                {menu.label}
              </a>
            ))}
          </nav>

          <ThemeToggleButton className="header__theme-button" />

          <button
            className="header__menu-button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="모바일 메뉴 열기"
            type="button"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <MobileMenu
          menus={sectionMenus}
          activeMenu={activeMenu}
          onClose={() => setIsMenuOpen(false)}
          onMenuClick={handleMenuClick}
        />
      )}
    </>
  );
}