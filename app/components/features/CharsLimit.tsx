export default function CharsLimit({
  limit,
  text,
  classname,
}: {
  limit: number;
  text: string | null | undefined;
  classname?: string;
}) {
  function truncateChars(
    word: string | null | undefined,
    maxChars = 100,
    ellipsis = "…"
  ) {
    if (!word) return "";
    if (word.length <= maxChars) return word;
    return word.slice(0, maxChars) + ellipsis;
  }

  function CardParaLimit({
    para,
    chars,
    className,
  }: {
    para: string | null | undefined;
    chars: number;
    className?: string;
  }) {
    return <p className={className}>{truncateChars(para, chars)}</p>;
  }
  {
    return (
      <CardParaLimit
        para={text}
        chars={limit}
        className={`${classname}`}
      />
    );
  }
}
