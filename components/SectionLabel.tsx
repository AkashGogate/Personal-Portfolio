interface Props {
  number: string;
  label: string;
  className?: string;
}

export default function SectionLabel({ number, label, className = "mb-4" }: Props) {
  return (
    <div className={`section-label ${className}`}>
      {number} / {label}
    </div>
  );
}
