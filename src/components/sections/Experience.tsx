import { FiBookOpen } from 'react-icons/fi';
import { experiences } from '../../data/experience';
import Accordion from '../common/Accordion';
import DetailAccordion from '../common/DetailAccordion';
import MediaFrame from '../common/MediaFrame';
import MediaFrameCta from '../common/MediaFrameCta';
import SectionTitle from '../common/SectionTitle';
import SummaryBox from '../common/SummaryBox';
import '../common/SectionItem.css';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <SectionTitle>Experience</SectionTitle>

      {experiences.map((experience) => (
        <article className="section-item" key={experience.title}>
          <div className="section-item__header">
            <h3 className="section-item__title">{experience.title}</h3>
            <p className="section-item__meta">{experience.period}</p>
            <p className="section-item__desc">{experience.description}</p>
          </div>

          <div className="section-item__body">
            <MediaFrame
              src={experience.imageSrc}
              alt={experience.imageAlt}
              href={experience.recordUrl}
              ariaLabel={`${experience.title} 관련 기록 보기`}
            >
              {experience.recordUrl ? (
                <MediaFrameCta label="관련 기록 보기" icon={<FiBookOpen />} />
              ) : null}
            </MediaFrame>

            <SummaryBox
              className="section-item__summary-desktop"
              roleTitle="담당 업무"
              roles={experience.roles}
              stacks={experience.stacks}
            />
          </div>

          <div className="section-item__summary-mobile">
            <Accordion title="업무 요약">
              <SummaryBox
                variant="accordion"
                roleTitle="담당 업무"
                roles={experience.roles}
                stacks={experience.stacks}
              />
            </Accordion>
          </div>

          <div className="section-item__details">
            {experience.details.map((detail, index) => (
              <DetailAccordion
                key={detail.title}
                detail={detail}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}