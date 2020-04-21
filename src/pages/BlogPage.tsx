import React, { useEffect, useState } from 'react';

function BlogPage(props: any) {
    return (
        <div className="blogpage">
            <div id="blog" className="page-container fullscreen" style={{ backgroundColor: props.bgColor }}>
                <h1>Blog</h1>
                <p>Check back soon! Articles are on the way...</p>
            </div>
        </div>

    );
}

export default BlogPage;