import React from 'react'
import { CardItem } from './CardItem'
import useFetch from './useFetch'
import './Cards.css'

export const Cards = () => {
    const { data } = useFetch("http://localhost:8000/blogs");
    return (
        <div className="cards">
            <h1>Check out these Epic Destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {data && data.slice(0, 3).map(blog => (
                            <CardItem id={blog.id} img={blog.img} title={blog.title} />

                        ))
                        }
                    </ul>
                    <ul className="cards__items">
                        {data && data.slice(3, 6).map(blog => (
                            <CardItem id={blog.id} img={blog.img} title={blog.title} />

                        ))
                        }
                    </ul>
                    <ul className="cards__items">
                        {data && data.slice(6, 9).map(blog => (
                            <CardItem id={blog.id} img={blog.img} title={blog.title} />

                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
