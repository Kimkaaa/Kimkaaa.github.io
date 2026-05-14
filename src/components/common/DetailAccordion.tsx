import type { AccordionItem } from '../../types/portfolio';
import Accordion from './Accordion';
import DotList from './DotList';

type TextContentValue = string | string[];

type DetailAccordionProps = {
  detail: AccordionItem;
  defaultOpen?: boolean;
};

type DetailTextSectionProps = {
  title: string;
  value?: TextContentValue;
};

function hasTextContent(value?: TextContentValue): value is TextContentValue {
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return typeof value === 'string' && value.trim().length > 0;
}

function TextContent({ value }: { value: TextContentValue }) {
  return Array.isArray(value) ? <DotList items={value} /> : <p>{value}</p>;
}

function DetailTextSection({ title, value }: DetailTextSectionProps) {
  if (!hasTextContent(value)) {
    return null;
  }

  return (
    <>
      <h5>{title}</h5>
      <TextContent value={value} />
    </>
  );
}

export default function DetailAccordion({
  detail,
  defaultOpen = false,
}: DetailAccordionProps) {
  return (
    <Accordion title={detail.title} defaultOpen={defaultOpen}>
      <DetailTextSection title="개요" value={detail.overview} />

      <h5>구현</h5>
      <DotList items={detail.implementation} />

      <DetailTextSection title="결과" value={detail.result} />
    </Accordion>
  );
}