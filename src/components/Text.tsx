type Text = {
    text: string
}

export const Text = ({text}: Text) => {
  return (
    <div className="text">
        <p>{text}</p>
    </div>
  )
}