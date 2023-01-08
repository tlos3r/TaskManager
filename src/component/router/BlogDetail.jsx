import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "./data.js";

const BlogDetail = () => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");

    const { id } = useParams();
    console.log(typeof id); // string

    useEffect(() => {
        const thisBlog = blogs.find((blog) => blog.id === parseInt(id));
        setAuthor(thisBlog.author);
        setDetail(thisBlog.details);
        setTitle(thisBlog.title);
    }, []);
    return (
        <div className="container mt-4">
            <div className="grid grid-cols-1 p-3">
                <h2 className="py-3 text-2xl font-bold">{title}</h2>
                <p className="py-2 text-xl">Author: {author}</p>
                <p className="text-xl">{detail}</p>
                <div className="my-3">
                    <Link className="font-bold hover:text-pink-600" to="/blog">{`<<< Back to Blog`}</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
