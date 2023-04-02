import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { classMerge } from "@/libs";

const headingVariants = cva(
  `text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter`,
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:6xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

type HeadingProps =  HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, size, ...otherProps }, ref) => {
    return (
      <h1
        ref={ref}
        {...otherProps}
        className={classMerge(headingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

Heading.displayName = "Heading";
