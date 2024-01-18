import { ReactNode } from "react";
import { BlockMath } from 'react-katex';
import "katex/dist/katex.min.css";

const MathBlock = ({ 
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}): JSX.Element => (
  <div className="math-block ">
      <BlockMath>{children}</BlockMath>
  </div>
);

export default MathBlock;

