import { ReactNode } from "react";
import { BlockMath } from 'react-katex';
import clsx from "clsx";
import "katex/dist/katex.min.css";

const MathBlock = ({ 
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}): JSX.Element => (
  <div className="math-block ">
    <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-md mt-7 bg-primary border border-secondary">
      <BlockMath>{children}</BlockMath>
    </div>
    <div className="mx-auto my-2 max-w-md text-center text-xs font-medium leading-tight text-tertiary">
      {caption && (
        <figcaption className={clsx("breakout && mx-auto w-full max-w-[700px] px-6")}>
          {caption}
        </figcaption>
      )}
    </div>
  </div>
);

export default MathBlock;

