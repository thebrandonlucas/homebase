import React, { useEffect, useState } from 'react';

function BlogPage(props: any) {
    return (
        <section id="blog" className="page-container fullscreen" style={{ backgroundColor: props.bgColor }}>
            <h1>Blog</h1>
            <p>I'm doing work to try and make things better</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, eum. Dignissimos maiores quos ex ipsam. Totam accusantium amet ipsam sint veniam, sunt ullam officiis provident ipsum, explicabo, eveniet quis quisquam.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, eum. Dignissimos maiores quos ex ipsam. Totam accusantium amet ipsam sint veniam, sunt ullam officiis provident ipsum, explicabo, eveniet quis quisquam.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, eum. Dignissimos maiores quos ex ipsam. Totam accusantium amet ipsam sint veniam, sunt ullam officiis provident ipsum, explicabo, eveniet quis quisquam.</p>
        </section>
    );
}

export default BlogPage;