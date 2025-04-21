/** Challenge-1:  - A reusable component is one function which receives data as props allow components to be dynamic */

import './Card.css'

const Card = ({ title, description, img }) => {
  return (
    <article>
      {' '}
      <img
        src={img}
        alt={title}
        className="img"
      />
      <h2 className="title">{title}</h2>
      <p className="desc">{description}</p>
    </article>
  )
}
export default Card
