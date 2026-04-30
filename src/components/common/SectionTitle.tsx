import { useEffect, useRef, useState } from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const target = titleRef.current;

    if (!target) return;

    let animationFrameId: number;

    const updateProgress = () => {
      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      /**
       * 제목이 화면 아래쪽에서 올라올수록 0 → 1로 증가
       * 화면 중앙보다 조금 아래에 오면 거의 100% 채워짐
       */
      const startPoint = windowHeight * 0.9;
      const endPoint = windowHeight * 0.45;

      const progress = (startPoint - rect.top) / (startPoint - endPoint);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      setLineProgress(clampedProgress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <h2
      ref={titleRef}
      className="section-title"
      style={{ '--line-progress': lineProgress } as React.CSSProperties}
    >
      {children}
    </h2>
  );
}