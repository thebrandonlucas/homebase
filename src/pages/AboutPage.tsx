import React, { useEffect, useState } from 'react';

function AboutPage(props: any) {
    return (
        <div className="aboutpage">
            <div id="about" className="page-container fullscreen" style={{ backgroundColor: props.bgColor }}>
                <h1>About Me</h1>
                <div className="container">
                    <div className="row">
                        <div className="text-left">
                            <h3>Mission</h3>
                            <p>
                                To live such that the world is a better place because I'm in it.
                                <br />
                                Maybe that's cliche, but when you boil things down, how else should I be living?
                            </p>
                            <p>
                                I'm a Junior majoring in Computer Science at the University of Alabama who loves building innovative tools
                                to solve real-world problems
                            </p>
                            <p>
                                I chose Computer Science because no other occupation has the same potential for widespread
                                impact
                            </p>
                            <p>
                                From full-stack web and mobile development to blockchain and machine learning, I enjoy learning new
                                and practical technologies that are bringing us into the future we could only envision
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;