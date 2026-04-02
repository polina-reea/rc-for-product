import { ArrowIcon } from "../ArrowIcon";

interface LinkWithArrowProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "base";
}

export function LinkWithArrow({
  href,
  children,
  className = "",
  size = "sm",
}: LinkWithArrowProps) {
  return (
    <a
      className={`font-object inline-flex items-center gap-2 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium text-${size} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} <ArrowIcon />
    </a>
  );
}
