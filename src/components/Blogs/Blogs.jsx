import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Bookmarks from "../Bookmarks/Bookmarks";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:flex md:justify-between md:items-center ">
            <div className="md:w-2/3">
                {blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)}
            </div>
            <div className="md:w-1/3">
                <Bookmarks></Bookmarks>
            </div>



        </div>
    );
};

export default Blogs;