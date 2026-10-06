/** Small dashed tag that marks content still to be replaced. Remove `placeholder: true` in /src/data to hide. */
export function PlaceholderTag({ show = true }: { show?: boolean }) {
  if (!show) return null;
  return <span className="placeholder-tag">Placeholder</span>;
}
