import { Link } from "react-router-dom";
import { blogs } from "./data.js";
const Blog = () => {
    return (
        <>
            <h3 className="text-2xl text-center">This is Blog page</h3>
            <article className="grid grid-cols-1 place-items-center ">
                {/* vòng lặp để render ra blog */}
                {blogs.map((blog) => {
                    const { id, title, author } = blog;
                    return (
                        <div className="w-3/12 p-3 m-3 bg-slate-400 ">
                            <h4 className="text-xl font-bold">{title}</h4>
                            <p>
                                Author : <span className="font-bold">{author}</span>
                            </p>
                            <Link to={`/blog/${id}`} className="font-bold hover:text-pink-600">
                                Read More
                            </Link>
                        </div>
                    );
                })}
            </article>
        </>
    );
};

export default Blog;
