interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <span className={`section-label ${className}`}>
      {text}
    </span>
  );
}
