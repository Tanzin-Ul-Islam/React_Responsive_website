import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'


export const CardItem = (props) => {
    return (
        <>
            <li className="cards__item" key={props.id}>
                <Link className="cards__item__link" to={`/blogs-details/${props.id}`}>
                    <figure className="cards__item__pic-wrap">
                        <img src={props.img} className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.title}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}
