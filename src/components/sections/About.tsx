import { useEffect, useRef, useState } from 'react';
import './About.css';

export default function About() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const lastPlayedAtRef = useRef(0);
  const wasVisibleRef = useRef(false);

  const [animationKey, setAnimationKey] = useState(0);

  const replayAnimation = () => {
    const now = Date.now();

    // 클릭 이벤트와 IntersectionObserver가 거의 동시에 실행되는 경우 방지
    if (now - lastPlayedAtRef.current < 700) return;

    lastPlayedAtRef.current = now;
    setAnimationKey((prev) => prev + 1);
  };

  useEffect(() => {
    const handleReplay = () => {
      replayAnimation();
    };

    window.addEventListener('replay-about-animation', handleReplay);

    return () => {
      window.removeEventListener('replay-about-animation', handleReplay);
    };
  }, []);

  useEffect(() => {
    const target = aboutRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;

        if (isVisible && !wasVisibleRef.current) {
          replayAnimation();
        }

        wasVisibleRef.current = isVisible;
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div key={animationKey} className="about__inner">
        <h1 className="about__title">
          <span className="about__line about__line--1">
            고민하고 기록하며
          </span>

          <span className="about__line about__line--2">
            <span className="about__highlight">성장</span>하는 개발자를 지향합니다.
          </span>
        </h1>

        <p className="about__desc about__desc--1">
          실무 앱 개발에서는 화면 구현과 API 연동을,
          <br />
          팀 프로젝트에서는 인증 · 데이터 처리 · 배포 흐름을 경험했습니다.
        </p>

        <p className="about__desc about__desc--2">
          학습과 구현 과정에서 마주한 문제를 기록하며,
          <br />
          작은 개선을 하나씩 쌓아가고 있습니다.
        </p>
      </div>
    </section>
  );
}