import DotList from './DotList';
import './SummaryBox.css';

interface SummaryBoxProps {
  roleTitle: string;
  roles: string[];
  stacks: string[];
  className?: string;
  variant?: 'box' | 'accordion';
}

export default function SummaryBox({
  roleTitle,
  roles,
  stacks,
  className = '',
  variant = 'box',
}: SummaryBoxProps) {
  const content = (
    <div className={`summary-box__content summary-box__content--${variant}`}>
      <div className="summary-box__group">
        <strong className="summary-box__section-title">{roleTitle}</strong>
        <DotList items={roles} />
      </div>

      <div className="summary-box__group">
        <strong className="summary-box__section-title">기술 스택</strong>

        <div className="summary-box__tags">
          {stacks.map((stack) => (
            <span className="summary-box__tag" key={stack}>
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (variant === 'accordion') {
    return content;
  }

  return <div className={`summary-box ${className}`.trim()}>{content}</div>;
}