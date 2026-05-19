import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../../data/projects';
import Accordion from '../common/Accordion';
import DetailAccordion from '../common/DetailAccordion';
import MediaFrame from '../common/MediaFrame';
import MediaFrameCta from '../common/MediaFrameCta';
import SectionTitle from '../common/SectionTitle';
import SummaryBox from '../common/SummaryBox';
import '../common/SectionItem.css';

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

            {project.siteUrl ? (
              <a
                className="section-item__site-link"
                href={project.siteUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} 배포 사이트 이동`}
              >
                <FiExternalLink aria-hidden="true" />
                배포 사이트
              </a>
            ) : null}

            <p className="section-item__desc">{project.description}</p>
          </div>

          <div className="section-item__body">
            <MediaFrame
              src={project.imageSrc}
              alt={project.imageAlt}
              href={project.githubUrl}
              ariaLabel={`${project.title} GitHub 이동`}
            >
              {project.githubUrl ? (
                <MediaFrameCta label="코드 보기" icon={<FiGithub />} />
              ) : null}
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
            {project.details.map((detail) => (
              <DetailAccordion key={detail.title} detail={detail} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}