import './Accordion.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) {
  return (
    <details className="accordion" open={defaultOpen}>
      <summary className="accordion__summary">{title}</summary>
      <div className="accordion__content">{children}</div>
    </details>
  );
}