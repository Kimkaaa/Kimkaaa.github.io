import InlineText from './InlineText';
import './DotList.css';

interface DotListProps {
  items: string[];
}

export default function DotList({ items }: DotListProps) {
  return (
    <ul className="dot-list">
      {items.map((item) => (
        <li key={item}>
          <InlineText text={item} />
        </li>
      ))}
    </ul>
  );
}