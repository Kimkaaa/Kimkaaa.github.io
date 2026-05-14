import './MediaFrameCta.css';

interface MediaFrameCtaProps {
  label: string;
  icon: React.ReactNode;
}

export default function MediaFrameCta({ label, icon }: MediaFrameCtaProps) {
  return (
    <span className="media-frame-cta" aria-hidden="true">
      <span className="media-frame-cta__bubble">{label}</span>

      <span className="media-frame-cta__icon">{icon}</span>
    </span>
  );
}