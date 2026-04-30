import DotList from '../common/DotList';
import SectionTitle from '../common/SectionTitle';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education">
      <SectionTitle>Education</SectionTitle>

      <div className="education__list">
        <article className="education__item">
          <h3 className="education__title">
            Java · Spring 기반 웹 개발자 양성 과정 수료
          </h3>

          <p className="education__period">2024.08 - 2024.12</p>

          <DotList
            items={[
              'Java와 Spring Framework를 기반으로 웹 애플리케이션을 개발했습니다.',
              'HTML, CSS, JavaScript와 Vue.js를 활용한 화면 구현과 사용자 인터랙션 처리를 수행했습니다.',
              'MySQL, PostgreSQL, SQL을 활용한 데이터베이스 설계 및 데이터 처리를 학습했습니다.',
              '팀 프로젝트를 통해 요구사항 분석, 시스템 설계, 협업 과정을 경험했습니다.',
            ]}
          />
        </article>

        <article className="education__item">
          <h3 className="education__title">경기대학교 경영학과</h3>

          <p className="education__period">2018.02 졸업</p>
        </article>
      </div>
    </section>
  );
}