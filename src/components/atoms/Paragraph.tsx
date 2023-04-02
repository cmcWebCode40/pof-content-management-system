import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { classMerge } from "@/libs";

const paragraphVariants = cva(
  `max-w-prose text-slate-700 dark:text:slate-300 mb-2 text-center`,
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",  
        sm: "text-sm, sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

type ParagraphProps =  HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof paragraphVariants>;

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, size, ...otherProps }, ref) => {
    return (
      <p
        ref={ref}
        {...otherProps}
        className={classMerge(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);


Paragraph.displayName = "Paragraph"