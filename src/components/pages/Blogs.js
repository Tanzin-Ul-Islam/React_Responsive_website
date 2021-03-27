import React from 'react'
import { CardItem } from '../CardItem'
import useFetch from '../useFetch'
import '../Cards.css'


export const Blogs = () => {
    const { data } = useFetch("http://localhost:8000/blogs")
    return (
        <>
        <h1 className="products">Top blogs</h1>
            <div className="cards">
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            {data && data.slice(0,4).map(blog => (
                                <CardItem id={blog.id} img={blog.img} title={blog.title} />

                            ))
                            }
                        </ul>
                        <ul className="cards__items">
                            {data && data.slice(4, 9).map(blog => (
                                <CardItem id={blog.id} img={blog.img} title={blog.title} />

                            ))
                            }
                        </ul>
                        <ul className="cards__items">
                            {data && data.slice(9, 13).map(blog => (
                                <CardItem id={blog.id} img={blog.img} title={blog.title} />

                            ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}
