export const Grid = ({children, sectionNum, rowNumber}) => {
  const style = {
    gridTemplateRows: rowNumber ? `repeat(${rowNumber}, auto)` : `repeat(3, auto)`
  }
  return <div className={`section section-${sectionNum} section-grid section-grid-${sectionNum}`}>{children}</div>
}
