interface ButtonProps {
  href: string;
  variant?: "primary" | "gradient";
  size?: "default" | "nav" | "large";
  className?: string;
  children: React.ReactNode;
}

const sizeClasses = {
  default:
    "h-12 rounded-full text-base px-7 max-md:h-11 max-md:text-sm",
  nav: "h-[2.625rem] rounded-full text-sm px-7 tracking-dense",
  large: "h-14 rounded-full text-base px-10 tracking-dense",
};

export function Button({
  href,
  variant = "primary",
  size = "default",
  className = "",
  children,
}: ButtonProps) {
  const base =
    "transition-colors duration-300 whitespace-nowrap font-object font-medium relative inline-flex w-fit items-center justify-center gap-1";

  const variantClass =
    variant === "gradient"
      ? "v2-btn-gradient v2-btn-shimmer text-white"
      : "bg-secondary-blue-1 hover:bg-secondary-blue-2 text-white";

  return (
    <a
      className={`${base} ${variantClass} ${sizeClasses[size]} ${className}`}
      href={href}
    >
      <span className="relative z-10 inline-flex whitespace-nowrap items-center justify-center gap-1 w-full">
        {children}
      </span>
    </a>
  );
}
