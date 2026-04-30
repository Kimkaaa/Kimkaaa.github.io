import { skills } from '../../data/skills';
import SectionTitle from '../common/SectionTitle';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <SectionTitle>Skills</SectionTitle>

      <div className="skills__grid">
        {skills.map((group) => (
          <article className="skills__card" key={group.category}>
            <h3>{group.category}</h3>

            <div className="skills__tags">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}