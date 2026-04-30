interface InlineTextProps {
  text: string;
}

export default function InlineText({ text }: InlineTextProps) {
  const parts = text.split(/(`[^`]+`)/g);

  return (
    <>
      {parts.map((part, index) => {
        const isCode = part.startsWith('`') && part.endsWith('`');

        if (isCode) {
          return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
        }

        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}