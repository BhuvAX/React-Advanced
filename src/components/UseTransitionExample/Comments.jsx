export default function Comments() {
  return (
    <ul>
      {Array(250)
        .fill(null)
        .map((_, i) => (
          <Comment key={i} number={i} />
        ))}
    </ul>
  );
}

function Comment({ number }) {
  const start = performance.now();
  while (start > performance.now() - 2) {
    // Artificial slowdown
  }
  return <li>Comment {number}</li>;
}
