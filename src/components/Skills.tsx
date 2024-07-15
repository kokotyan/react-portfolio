import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2>Skills Menu</h2>
      <div className="menu-category">
        <h3>Frontend Development</h3>
        <ul>
          <li>
            HTML5 <span className="price">Advanced</span>
          </li>
          <li>
            CSS3 <span className="price">Advanced</span>
          </li>
          <li>
            JavaScript <span className="price">Advanced</span>
          </li>
          <li>
            React <span className="price">In moderation</span>
          </li>
          <li>
            Vue <span className="price">In moderation</span>
          </li>
          <li>
            TypeScript <span className="price">In moderation</span>
          </li>
        </ul>
      </div>
      <div className="menu-category">
        <h3>Backend Development</h3>
        <ul>
          <li>
            Node.js <span className="price">In moderation</span>
          </li>
          <li>
            Python <span className="price">In moderation</span>
          </li>
          <li>
            PHP <span className="price">a little</span>
          </li>
          <li>
            MySQL <span className="price">a little</span>
          </li>
        </ul>
      </div>
      <div className="menu-category">
        <h3>Other Skills</h3>
        <ul>
          <li>
            Git <span className="price">Advanced</span>
          </li>
          <li>
            Docker <span className="price">a little</span>
          </li>
          <li>
            AWS <span className="price">a little</span>
          </li>
          <li>
            Wordpress <span className="price">In moderation</span>
          </li>
          <li>
            Illustrator <span className="price">In moderation</span>
          </li>
          <li>
            ubuntu <span className="price">a little</span>
          </li>
        </ul>
      </div>
      <p className="footer-text">Enjoy your skills!</p>
    </section>
  );
};

export default Skills;
