import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Bookmarks from "../Bookmarks/Bookmarks";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    const [bookmarks, setBookmarks] = useState([])
    const [readtime, setReadtime] = useState(0)


    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleAddToBookmark = blog => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks)
    }
    const handleMarkAsRead = (blogTime) => {
        const newReadTime = readtime + blogTime;
        setReadtime(newReadTime)
    }
    return (
        <div className="md:flex md:justify-between   gap-4">
            <div className="md:w-2/3">
                {blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)}
            </div>
            <div className="md:w-1/3 my-6">
                <Bookmarks
                    bookmarks={bookmarks}
                    readtime={readtime}

                >
                </Bookmarks>
            </div>



        </div>
    );
};

export default Blogs;