import { Link } from "react-router-dom";
import { Plus, FileText } from "lucide-react";

const Blog = () => {
    return (
        <div>

            <div className="admin-page-header">

                <div>
                    <h1>Blog</h1>

                    <p>
                        Create and manage your blog posts.
                    </p>
                </div>

                <Link
                    to="/admin/blog/create"
                    className="admin-primary-btn"
                >
                    <Plus size={18} />
                    Create Post
                </Link>

            </div>


            <div className="admin-table-card">

                <div className="admin-empty">

                    <FileText size={40} />

                    <h3>No blog posts yet</h3>

                    <p>
                        Create your first blog post.
                    </p>

                    <Link
                        to="/admin/blog/create"
                        className="admin-primary-btn"
                    >
                        Create Post
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Blog;