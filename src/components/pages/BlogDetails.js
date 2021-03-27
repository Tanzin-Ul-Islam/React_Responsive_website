import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from '../useFetch';
import '../Blogdetails.css'
import Button from '../Button';

export const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data } = useFetch("http://localhost:8000/blogs/" + id)
    const DeleteBlog = () => {
        fetch("http://localhost:8000/blogs/" + id,{
            method:"DELETE"
        }).then(()=>{
            history.push("/");
        })
    }
    return (
        <>
            {data && (
                <>
                    <img src={data.img} className="custom-img"/>
                    <article className="blog-article">
                        <h2>{data.title}</h2>
                        <div>{data.body}</div>
                        <button onClick={DeleteBlog}>Delete Blog</button>
                    </article>
                </>
            )}
        </>
    )
}
