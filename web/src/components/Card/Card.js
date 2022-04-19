const Card = ({
  content = 'please feed the card',
  title = 'Title of my card',
}) => {
  return (
    <div className="bg-gray-200">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Card
