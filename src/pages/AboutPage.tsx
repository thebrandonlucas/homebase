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
                That might sound cliche, but cliches exist for a reason.
              </p>
              <h2>Who I Am</h2>
              <p>
                I'm a software engineer who loves building innovative tools to solve real-world problems. I chose
                computer science because no other occupation has the same potential for widespread positive impact.
              </p>
              <p>
                I have experience in full-stack mobile and web development and machine learning, and lately, I've come
                to love Bitcoin technology and the future that we didn't even envision before its existence.
              </p>
              <p>In my spare time, I love reading and playing my bass guitar.</p>
              <h2>Learn More</h2>
              <p>
                If you'd like to find out more about me, see my{' '}
                <a target="_blank" href="https://www.linkedin.com/in/bslucas/">
                  LinkedIn
                </a>
              </p>
              <p>
                If you'd like to take a look at some of my work, check out my{' '}
                <a target="_blank" href="https://github.com/thebrandonlucas">
                  Github
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
