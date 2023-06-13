export const Img = ({src, num}) => {
  return (
    <div className={`image-box image-box-${num}`}>
        <img className="image-item" src={`/img/${src}`} />
    </div>
  )
}
