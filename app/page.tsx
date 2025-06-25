"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
            <div className="logo">AM</div>
            <div className="logo-text">Anthony Portfolio</div>
        </a>
        <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
                <li><a href="#">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="mailto:amalesevi@gmail" className="button">Contact Me</a></li>
            </ul>
            <a href="#" className="menu-toggle" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
            </a>
        </nav>
    </header>

    <main>
        <section className="hero container">
            <div className="hero-blue">
                <div>
                    <h1><small>Hi, I'm</small> Anthony Malesevic</h1>
                    <p>
                        I'm a Full Stack Developer who has worked in PHP for over 10 years and in C#/.Net prior to that. <span>I love to dabble in side projects in the game design, AI, 3D modeling, and video editing spaces.</span>
                    </p>
                    <div className="call-to-action">
                        <a href="./docs/resume.pdf" className="button black">View Resume</a>
                        <a href="mailto:amalesevi@gmail.com" className="button white">Contact Me</a>
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/amalesevi">
                            <img src="./images/github.png" alt="Github" width="48px" />
                        </a>
                        <a href="https://www.linkedin.com/in/anthony-malesevic-94b15a2b/">
                            <img src="./images/linkedin.png" alt="LinkedIn" width="48px" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-green">
                <img src="./images/Attempt_3.png" alt="Anthony Malesevic" width="100%" />
            </div>
        </section>

        <section className="logos container">
            <div className="marquee">
                <div className="track">
                    <img src="./images/html.png" alt="HTML" width="128px" />
                    <img src="./images/css.png" alt="CSS" width="128px" />
                    <img src="./images/javascript.png" alt="Javascript" width="128px" />
                    <img src="./images/php.png" alt="PHP" width="128px" />
                    <img src="./images/csharp.png" alt="C#" width="128px" />
                    <img src="./images/python.png" alt="Python" width="128px" />
                    <img src="./images/phpstorm.png" alt="PHPStorm" width="128px" />
                    <img src="./images/mysql.png" alt="MySQL" width="128px" />
                    <img src="./images/vscode.png" alt="VS Code" width="128px" />
                    <img src="./images/bootstrap.png" alt="Bootstrap" width="128px" />
                    <img src="./images/lua.png" alt="Lua" width="128px" />
                    <img src="./images/aspnet.png" alt="Asp.Net" width="128px" />
                    <img src="./images/mssql.png" alt="Micosoft SQL" width="128px" />
                    <img src="./images/yii2.png" alt="Yii 2" width="128px" />
                    <img src="./images/docker.png" alt="Docker" width="128px" />
                    <img src="./images/git.png" alt="Git" width="128px" />
                    <img src="./images/github.png" alt="GitHub" width="128px" />
                    <img src="./images/nodejs.png" alt="NodeJS" width="128px" />
                    <img src="./images/reactjs.png" alt="React" width="128px" />
                    <img src="./images/mongodb.png" alt="MongoDB" width="128px" />
                    <img src="./images/html.png" alt="HTML" width="128px" />
                    <img src="./images/css.png" alt="CSS" width="128px" />
                    <img src="./images/javascript.png" alt="Javascript" width="128px" />
                    <img src="./images/php.png" alt="PHP" width="128px" />
                    <img src="./images/csharp.png" alt="C#" width="128px" />
                    <img src="./images/python.png" alt="Python" width="128px" />
                    <img src="./images/phpstorm.png" alt="PHPStorm" width="128px" />
                    <img src="./images/mysql.png" alt="MySQL" width="128px" />
                    <img src="./images/vscode.png" alt="VS Code" width="128px" />
                    <img src="./images/bootstrap.png" alt="Bootstrap" width="128px" />
                    <img src="./images/lua.png" alt="Lua" width="128px" />
                    <img src="./images/aspnet.png" alt="Asp.Net" width="128px" />
                    <img src="./images/mssql.png" alt="Micosoft SQL" width="128px" />
                    <img src="./images/yii2.png" alt="Yii 2" width="128px" />
                    <img src="./images/docker.png" alt="Docker" width="128px" />
                    <img src="./images/git.png" alt="Git" width="128px" />
                    <img src="./images/github.png" alt="GitHub" width="128px" />
                    <img src="./images/nodejs.png" alt="NodeJS" width="128px" />
                    <img src="./images/reactjs.png" alt="React" width="128px" />
                    <img src="./images/mongodb.png" alt="MongoDB" width="128px" />
                </div>
            </div>
        </section>

        <section className="skills container" id="skills">
            <h2>
                <small>About Me</small>
                Skills
            </h2>
            <div className="holder-green">
                <div className="left-column">
                    <h3>Work experience languages</h3>
                    <ul>
                        <li>PHP</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>MySQL</li>
                        <li>Lua</li>
                        <li>Asp.NET</li>
                        <li>C#</li>
                        <li>MS SQL</li>
                    </ul>
                    <h3>Other technical skills</h3>
                    <ul>
                        <li>AWS</li>
                        <li>PhpStorm</li>
                        <li>Visual Studio/VS Code</li>
                        <li>Yii2</li>
                        <li>Docker</li>
                        <li>Git and Github</li>
                        <li>Tortoise SVN</li>
                        <li>JIRA</li>
                        <li>Confluence</li>
                        <li>LAMP Stack</li>
                        <li>Azure DevOps</li>
                    </ul>
                    <h3>Hobby technologies</h3>
                    <ul>
                        <li>Blender</li>
                        <li>Davinci Resolve</li>
                        <li>Adobe Express</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>Next JS</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>NodeJS</li>
                        <li>Visual Basic</li>
                    </ul>
                </div>
                <div className="right-column">
                    <h3>A bit about me</h3>
                    <p>I began my journey into web development in the 10th grade, exploring basic early 90s websites. Finding the tasks too simple, I pushed myself to learn more, diving into JavaScript and exceeding expectations. My passion for coding led me to work as a programmer for CSPAN and Purdue University during college. Initially majoring in Actuarial Science, I discovered my true calling in IT, prompting me to change my major.</p>
                    <p>Since then, I've gained experience as a PHP/Lua Developer at MacAllister Machinery and as a PHP Developer at Drivrz Financial. My love for coding has only grown, and in my spare time, I explore various technologies, including Python, React, Next.js, Blender, and Davinci Resolve. This continuous learning fuels my passion and keeps me excited about the ever-evolving field of technology.</p>
                </div>
            </div>
        </section>

        <section className="work-experience container">
            <h2>
                <small>Recent</small>
                Work Experience
            </h2>
            <div className="jobs">
                <article>
                    <figure>
                        <div>
                            <img src="./images/df.png" alt="Drivrz Financial" width="100%" />
                            <figcaption>Drivrz Financial</figcaption>
                        </div>
                    </figure>
                    <h3>Drivrz Financial</h3>
                    <div>Dec 2021 - May 2024</div>
                    <p>At Drivrz Financial, I worked in both collaborative multi-developer teams and independently as the lead developer. I engaged in the full Software Development Life Cycle (SDLC) process and followed Agile methodologies, including sprint planning and daily stand-ups. As I progressed in my role, I became the lead developer, taking on responsibilities such as interviewing and training junior developers.</p>
                    <p>During my tenure, I worked closely with Business Analysts to analyze business requirements and design efficient solutions. Key projects included reworking the permissions system, redesigning the dealer experience, implementing drag-and-drop functionality, and modernizing the document upload process. My contributions ensured that the solutions met business needs while maintaining high efficiency and functionality.</p>
                </article>
                <article>
                    <figure>
                        <div>
                            <img src="./images/macallister.png" alt="MacAllister Machinery" width="100%" />
                            <figcaption>MacAllister Machiner</figcaption>
                        </div>
                    </figure>
                    <h3>MacAllister Machinery</h3>
                    <div>Dec 2014 - Oct 2021</div>
                    <p>At MacAllister Machinery, I leveraged my skills in Lua and the LAMP stack to develop and enhance features for an ERP system, which was later implemented company-wide. My role included administering Atlassian products such as JIRA and Confluence. Additionally, I maintained and updated the company's intranet using VB.Net, C#, and Microsoft SQL.</p>
                    <p>Our development process was a blend of waterfall and agile methodologies, involving the creation of functional and technical specifications along with biweekly scrum meetings. I collaborated closely with Subject Matter Experts (SMEs) and other business members to ensure our solutions effectively met the company's needs.</p>
                </article>
                <article>
                    <figure>
                        <div>
                            <img src="./images/risque.png" alt="Risque Software Development Group" width="100%" />
                            <figcaption>Risque Software Development Group</figcaption>
                        </div>
                    </figure>
                    <h3>Risque Software Development Group</h3>
                    <div>Aug 2013 - Dec 2014</div>
                    <p>During my tenure with the Risque Software Development Group, I played a crucial role in developing, maintaining, and enhancing the Purdue University website responsible for managing campus-wide networking. Utilizing ASP.Net, C#, and Microsoft SQL, I collaborated with a team of 3-5 developers, depending on the time of year, to ensure seamless operation and continual improvement of the site's functionality.</p>
                </article>
            </div>
        </section>
    </main>
    </>
  );
}
