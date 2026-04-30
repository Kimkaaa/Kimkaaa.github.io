import { FiGithub } from 'react-icons/fi';
import { projects } from '../../data/projects';
import Accordion from '../common/Accordion';
import DotList from '../common/DotList';
import MediaFrame from '../common/MediaFrame';
import SectionTitle from '../common/SectionTitle';
import SummaryBox from '../common/SummaryBox';
import '../common/SectionItem.css';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <SectionTitle>Projects</SectionTitle>

      {projects.map((project) => (
        <article className="section-item" key={project.title}>
          <div className="section-item__header">
            <h3 className="section-item__title">{project.title}</h3>

            <p className="section-item__meta">
              {project.period} · {project.members}
            </p>

            <p className="section-item__desc">{project.description}</p>
          </div>

          <div className="section-item__body">
            <MediaFrame
              src={project.imageSrc}
              alt={project.imageAlt}
              href={project.githubUrl}
              ariaLabel={`${project.title} GitHub 이동`}
            >
              <span className="project__github-cta" aria-hidden="true">
                <span className="project__github-bubble">코드 보기</span>

                <span className="project__github-icon">
                  <FiGithub />
                </span>
              </span>
            </MediaFrame>

            <SummaryBox
              className="section-item__summary-desktop"
              roleTitle="담당 역할"
              roles={project.roles}
              stacks={project.stacks}
            />
          </div>

          <div className="section-item__summary-mobile">
            <Accordion title="프로젝트 요약">
              <SummaryBox
                variant="accordion"
                roleTitle="담당 역할"
                roles={project.roles}
                stacks={project.stacks}
              />
            </Accordion>
          </div>

          <div className="section-item__details">
            {project.details.map((detail, index) => (
              <Accordion key={detail.title} title={detail.title} defaultOpen={index === 0}>
                {detail.overview && (
                  <>
                    <h5>개요</h5>
                    {Array.isArray(detail.overview) ? (
                      <DotList items={detail.overview} />
                    ) : (
                      <p>{detail.overview}</p>
                    )}
                  </>
                )}

                <h5>구현</h5>
                <DotList items={detail.implementation} />

                <h5>결과</h5>
                <DotList items={detail.result} />
              </Accordion>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}