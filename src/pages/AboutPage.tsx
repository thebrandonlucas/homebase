import React, { useEffect, useState } from 'react';

function AboutPage(props: any) {
    return (
        <div className="aboutpage">
            <div id="about" className="page-container fullscreen" style={{ backgroundColor: props.bgColor }}>
                <h1>About Me</h1>
                <div className="container">
                    <div className="row">
                        <div className="text-left">
                            <h2>Mission</h2>
                            <p>
                                <b>To live such that the world is a better place because I'm in it.</b>
                                <br />
                                That might sound cliche, but hey, I think it's a good starting point.
                            </p>
                            <h2>Who I Am</h2>
                            <p>
                                I'm a Junior majoring in Computer Science at the University of Alabama who loves building innovative tools
                                to solve real-world problems. I chose CS because no other occupation has the same potential for widespread
                                positive impact.
                            </p>
                            <p>
                                From full-stack web and mobile development to blockchain and machine learning, I enjoy learning new
                                and practical technologies that are bringing us into the future we could once only envision.
                            </p>
                            <p>
                                In my spare time, I love reading, playing my bass guitar, and finding new exciting programming projects to tackle!
                            </p>
                            <h2>Learn More</h2>
                            <p>
                                If you'd like to find out more about me, see my <a target="_blank" href="https://www.linkedin.com/in/bslucas/">LinkedIn</a>
                            </p>
                            <p>
                                If you'd like to take a look at some of my work, check out my <a href="https://github.com/thebrandonlucas">Github</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;