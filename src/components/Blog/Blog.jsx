import { space } from "postcss/lib/list";
import { FaRegBookmark } from "react-icons/fa";
import PropTypes from "prop-types"
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    return (
        <div className="my-6" >
            <div className="w-full">
                <img className="rounded-xl w-full" src={blog.
                    cover_image} alt="" />
            </div>
            <div className="flex gap-4 justify-between items-center ">
                {/* Author */}
                <div className="flex gap-4 my-2">
                    <img className="w-12 h-12 rounded-full" src={blog.author_image} alt="" />
                    <div>
                        <p>{blog.author_name}</p>
                        <p>{blog.date}</p>
                    </div>
                </div>
                {/*  BookMark*/}
                <p className="flex items-center gap-3">{blog.reading_time} Min Read <button onClick={() => handleAddToBookmark(blog)}><FaRegBookmark /></button></p>
            </div>
            <h3 className="text-3xl font-semibold">{blog.title}</h3>

            {blog.hashtags.map((hashtag, index) => (
                <span className="mr-2" key={index}>{hashtag}</span>
            ))}

            <div>

                <button className="underline my-2 text-sky-500 bg-slate-200 p-2 rounded-lg" onClick={() => handleMarkAsRead(blog.reading_time, blog.id)}>Mark As Read</button>
            </div>

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;