export const Grid = ({children, sectionNum}) => {
  return <div className={`section section-${sectionNum} section-grid section-grid-${sectionNum}`}>{children}</div>
}
