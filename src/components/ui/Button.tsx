import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "white" | "outline" | "black";
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  showArrow = true,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const cls = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {showArrow && <ArrowRight size={16} />}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
      {showArrow && <ArrowRight size={16} />}
    </button>
  );
}
