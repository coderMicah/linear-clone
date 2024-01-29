import Link from "next/link";
import { cn } from "../lib/utilis";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva("inline-flex items-center rounded-full", {
  variants: {
    variant: {
      primary: ["bg-[#5e6ad2] hover:text-shadow hover:box-shadow-primary",
    "[&_.icon-wrapper]:ml-2"],
      secondary: ["justify-center bg-white bg-opacity-10 text-off-white backdrop-blur-[12px] border border-transparent-white hover:bg-opacity-20 transition-colors ease-in",
      // "[&_.icon-wrapper]:bg-transparent-white,[&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2 [&_.icon-wrapper]:ml-2 [&_.icon-wrapper]:-mr-2"
    ],
      tertiary: "",
    },
    size: {
      sm: "text-xs px-3 h-7",
      md: "text-sm px-4 h-8",
      lg: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const IconWrapper = ({children}:{children:React.ReactNode}) => {
  return <span className="icon-wrapper">{children}</span>
}

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const Button = ({ children, href, variant, size }: ButtonProps) => {
  return (
    <Link className={cn(buttonVariants({ variant, size }))} href={href}>
      {children}
    </Link>
  );
};

export default Button;
