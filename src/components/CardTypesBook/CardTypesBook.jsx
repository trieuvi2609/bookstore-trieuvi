import React from 'react'
import { Link } from 'react-router-dom'
import './CardTypesBook.scss'
import { imageType } from 'app/data'

function CardTypesBook(props) {
  const name = props.name
  const id = props.id
  const path = `/type/${name}`
  const imageUrl = imageType[Number(id) - 1]

  return (
    <div className="cardtype" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="cardtype__top">
        <h2 className="cardtype__top-name">{name}</h2>
      </div>
      <div className="cardtype__bot">
        <Link to={path}>
          <button>MORE DETAILS</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTypesBook
