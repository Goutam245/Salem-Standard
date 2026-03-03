interface LogoProps {
  height?: number;
  stacked?: boolean;
  className?: string;
}

const Logo = ({ height = 36, stacked = false, className = "" }: LogoProps) => {
  const scale = height / 36;

  if (stacked) {
    return (
      <div className={`flex flex-col items-center ${className}`} style={{ gap: 2 * scale }}>
        <span
          className="font-display italic font-light"
          style={{ fontSize: 24 * scale, lineHeight: 1, color: "#E8611A", letterSpacing: "0.02em" }}
        >
          Salem
        </span>
        <span
          className="font-body font-light uppercase"
          style={{ fontSize: 11 * scale, lineHeight: 1, color: "#1C1C1C", letterSpacing: "0.25em" }}
        >
          Steamer
        </span>
        <span className="block" style={{ width: 48 * scale, height: 0.5, backgroundColor: "#E8611A" }} />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-start ${className}`} style={{ gap: 3 * scale }}>
      <div className="flex items-center" style={{ gap: 10 * scale }}>
        <span
          className="font-display italic font-light"
          style={{ fontSize: 26 * scale, lineHeight: 1, color: "#E8611A", letterSpacing: "0.02em" }}
        >
          Salem
        </span>
        <span className="block" style={{ width: 1, height: 20 * scale, backgroundColor: "#E8611A" }} />
        <span
          className="font-body font-light uppercase"
          style={{ fontSize: 13 * scale, lineHeight: 1, color: "#1C1C1C", letterSpacing: "0.22em" }}
        >
          Steamer
        </span>
      </div>
      <span className="block w-full" style={{ height: 0.5, backgroundColor: "#E8611A" }} />
      <span
        className="font-body"
        style={{ fontSize: 7.5 * scale, color: "#9A9A9A", letterSpacing: "0.2em", lineHeight: 1 }}
      >
        EST. 2003
      </span>
    </div>
  );
};

export default Logo;
