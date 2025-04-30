interface SectionHeaderProps {
  title: string;
  dir?: "l" | "r";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, dir = "r" }) => {
  return (
    <div
      className="flex items-center gap-8 mb-12"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="w-full h-[1px] bg-zinc-700" />
      <h2>
        <span className="text-3xl md:text-5xl font-black text-end">
          {title}
          <span className="text-primary">.</span>
        </span>
      </h2>
    </div>
  );
};
export default SectionHeader;
