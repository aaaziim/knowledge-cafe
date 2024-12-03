import { space } from "postcss/lib/list";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark }) => {
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
                <p >{blog.reading_time} Min Read <button onClick={() => handleAddToBookmark(blog)}><FaRegBookmark /></button></p>
            </div>
            <h3 className="text-3xl font-semibold">{blog.title}</h3>

            {blog.hashtags.map((hashtag, index) => (
                <span className="mr-2" key={index}>{hashtag}</span>
            ))}

            <p className="underline my-2 text-sky-500">Mark As read</p>

        </div>
    );
};

export default Blog;