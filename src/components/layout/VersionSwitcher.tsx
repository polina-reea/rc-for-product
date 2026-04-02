import Link from "next/link";

export function VersionSwitcher({ current }: { current: "v1" | "v2" }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md border border-border-light shadow-card px-1.5 py-1.5">
      <Link
        href="/v1"
        className={`font-object text-xs font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
          current === "v1"
            ? "bg-secondary-blue-1 text-white"
            : "text-gray-750 hover:text-primary"
        }`}
      >
        V1
      </Link>
      <Link
        href="/v2"
        className={`font-object text-xs font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
          current === "v2"
            ? "bg-primary text-white"
            : "text-gray-750 hover:text-primary"
        }`}
      >
        V2
      </Link>
    </div>
  );
}
