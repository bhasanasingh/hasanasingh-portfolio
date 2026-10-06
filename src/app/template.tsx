/** Re-mounts on every navigation → gives each page a subtle fade/slide-in transition (CSS, respects reduced motion). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
