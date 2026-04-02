export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="v2-theme scroll-snap-container">{children}</div>;
}
