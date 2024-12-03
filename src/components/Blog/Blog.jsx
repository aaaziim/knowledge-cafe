
const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div>
            <p>{blog.title}</p>
            <img src={blog.
cover_image} alt="" />
        </div>
    );
};

export default Blog;