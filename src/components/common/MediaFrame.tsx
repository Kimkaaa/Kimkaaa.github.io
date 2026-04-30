import './MediaFrame.css';

interface MediaFrameProps {
  src: string;
  alt: string;
  href?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

export default function MediaFrame({
  src,
  alt,
  href,
  ariaLabel,
  children,
}: MediaFrameProps) {
  const content = (
    <>
      <img src={src} alt={alt} />
      {children}
    </>
  );

  if (href) {
    return (
      <a
        className="media-frame"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return <div className="media-frame">{content}</div>;
}