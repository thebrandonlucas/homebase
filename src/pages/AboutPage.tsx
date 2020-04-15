import React, { useEffect, useState } from 'react';

function AboutPage(props: any) {
    return (
        <section id="about" className="page-container fullscreen aboutpage" style={{ backgroundColor: props.bgColor }}>
            <h1>About Me</h1>
            <h3>Mission</h3>
            <p>To do as much good as possible in the limited time alloted to me</p>
        </section>
    );
}

export default AboutPage;