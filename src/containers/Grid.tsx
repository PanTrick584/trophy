import { ReactNode } from "react";

interface GridProps {
    children: ReactNode;
    sectionNum: string;
    rowNumber: number
}

const Grid = ({children, sectionNum, rowNumber}: GridProps) => {
  const style = {
    gridTemplateRows: rowNumber ? `repeat(${rowNumber}, auto)` : `repeat(3, auto)`
  }
  return <div className={`section section-${sectionNum} section-grid section-grid-${sectionNum}`}>{children}</div>
}

export default Grid;