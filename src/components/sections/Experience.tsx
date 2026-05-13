import { experiences } from '../../data/experience';
import Accordion from '../common/Accordion';
import DotList from '../common/DotList';
import MediaFrame from '../common/MediaFrame';
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
            <MediaFrame src={experience.imageSrc} alt={experience.imageAlt} />

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
              <Accordion key={detail.title} title={detail.title} defaultOpen={index === 0}>
                {detail.overview && (
                  <>
                    <h5>개요</h5>
                    <p>{detail.overview}</p>
                  </>
                )}

                <h5>구현</h5>
                <DotList items={detail.implementation} />

                {detail.result?.length ? (
                  <>
                    <h5>결과</h5>
                    <DotList items={detail.result} />
                  </>
                ) : null}
              </Accordion>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}