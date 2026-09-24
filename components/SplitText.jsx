// Word-by-word rising headline. Pure CSS (see .split-word in globals.css), so
// it works in server components and plays on first paint without waiting for JS.
export default function SplitText({ text, as: Tag = "span", className = "", delay = 0, style = undefined }) {
  const words = String(text).split(" ");

  return (
    <Tag className={className} style={{ ...style, "--base-delay": `${delay}ms` }} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="split-word" aria-hidden="true">
          <span style={{ "--i": i }}>{word}</span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
