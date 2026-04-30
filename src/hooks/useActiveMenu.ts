import { useEffect, useRef, useState } from 'react';
import type { SectionId, SectionMenu } from '../constants/sectionMenus';

interface UseActiveMenuOptions {
  menus: readonly SectionMenu[];
  defaultActiveMenu?: SectionId;
}

export default function useActiveMenu({
  menus,
  defaultActiveMenu = 'about',
}: UseActiveMenuOptions) {
  const [activeMenu, setActiveMenu] = useState<SectionId>(defaultActiveMenu);

  const activeMenuRef = useRef<SectionId>(defaultActiveMenu);
  const programmaticTargetRef = useRef<SectionId | null>(null);

  useEffect(() => {
    activeMenuRef.current = activeMenu;
  }, [activeMenu]);

  const handleMenuClick = (menuId: SectionId) => {
    const isAlreadyActive = activeMenuRef.current === menuId;

    setActiveMenu(menuId);
    programmaticTargetRef.current = isAlreadyActive ? null : menuId;

    if (menuId === 'about') {
      window.dispatchEvent(new CustomEvent('replay-about-animation'));
    }
  };

  useEffect(() => {
    const sections = menus
      .map((menu) => document.getElementById(menu.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const programmaticTarget = programmaticTargetRef.current;

        if (programmaticTarget) {
          const targetEntry = entries.find(
            (entry) =>
              entry.isIntersecting && entry.target.id === programmaticTarget
          );

          if (targetEntry) {
            setActiveMenu(programmaticTarget);
            programmaticTargetRef.current = null;
          }

          return;
        }

        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          const menu = menus.find((item) => item.id === visibleEntry.target.id);

          if (menu) {
            setActiveMenu(menu.id);
          }
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [menus]);

  return {
    activeMenu,
    handleMenuClick,
  };
}