import { ReactNode } from "react";

interface GridProps {
    children: ReactNode;
    sectionNum: string;
}

const Grid = ({children, sectionNum}: GridProps) => {
    return (
        <div className={`section section-${sectionNum} section-grid section-grid-${sectionNum}`}>{children}</div>
    )
}

export default Grid;