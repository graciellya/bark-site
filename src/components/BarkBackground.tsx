import "./BarkBackground.css";

type BarkBackgroundProps = {
  overlayOpacity?: number;
};

const BarkBackground = ({ overlayOpacity = 0.5 }: BarkBackgroundProps) => {
  return (
    <div className="bark-background" aria-hidden="true">
      <div className="bark-background__image" />
      <div
        className="bark-background__overlay"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};

export default BarkBackground;
