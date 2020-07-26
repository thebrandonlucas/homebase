import React, { useEffect, useState } from 'react';

function BlogPage(props: any) {
    return (
        <div className="blogpage">
            <div id="blog" className="page-container fullscreen" style={{ backgroundColor: props.bgColor }}>
                <h1>Blog</h1>
                <p>
                    Reflections, thoughts, essays, and more.
                    <br />
                    <a className="blog-link" href="https://www.notion.so/Blog-41e42cd897de424082115b3fe11e1aae">
                        Go to blog
                    </a>
                </p>
            </div>
        </div>

    );
}

export default BlogPage;