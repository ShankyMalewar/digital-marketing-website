type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-intro">{text}</p> : null}
    </div>
  );
}
