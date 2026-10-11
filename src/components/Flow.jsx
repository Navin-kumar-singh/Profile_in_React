export default function Flow({ steps, horizontal = false, label }) {
  return (
    <ol className={"flow" + (horizontal ? " flow-h" : "")} aria-label={label}>
      {steps.map((s) => (<li key={s}><span>{s}</span></li>))}
    </ol>
  );
}
