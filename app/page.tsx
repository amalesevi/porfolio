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
            <div className="logo-text">Anthony&apos;s Portfolio</div>
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
                    <h1><small>Hello, I&apos;m</small> Anthony Malesevic</h1>
                    <p>
                        I&apos;m a senior web developer with over 10 years of experience, focused on PHP, JavaScript, HTML/CSS, and recently building up modern frontend skills with React. Most of my work has been in finance and internal business systems, where I’ve helped redesign critical tools and collaborated closely with cross-functional teams to deliver real-world solutions. I enjoy picking up new technologies and turning complex requests into clean, efficient results.
                    </p>
                    <div className="call-to-action">
                        <a href="./docs/resume.pdf" className="button black">View Resume</a>
                        <a href="mailto:amalesevi@gmail.com" className="button white">Contact Me</a>
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/amalesevi">
                            <Image src="/images/github.png" alt="Github" width={48}  height={48} />
                        </a>
                        <a href="https://www.linkedin.com/in/anthony-malesevic-94b15a2b/">
                            <Image src="/images/linkedin.png" alt="LinkedIn" width={48}  height={48} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-green">
                <Image src="/images/Attempt_3.png" alt="Anthony Malesevic" layout="fill" objectFit="contain" />
            </div>
        </section>

        <section className="logos container">
            <div className="marquee">
                <div className="track">
                    <Image src="/images/html.png" alt="HTML" width={128}  height={0} />
                    <Image src="/images/css.png" alt="CSS" width={128}  height={0} />
                    <Image src="/images/javascript.png" alt="Javascript" width={128}  height={0} />
                    <Image src="/images/php.png" alt="PHP" width={128}  height={0} />
                    <Image src="/images/csharp.png" alt="C#" width={128}  height={0} />
                    <Image src="/images/python.png" alt="Python" width={128}  height={0} />
                    <Image src="/images/phpstorm.png" alt="PHPStorm" width={128}  height={0} />
                    <Image src="/images/mysql.png" alt="MySQL" width={128}  height={0} />
                    <Image src="/images/vscode.png" alt="VS Code" width={128}  height={0} />
                    <Image src="/images/bootstrap.png" alt="Bootstrap" width={128}  height={0} />
                    <Image src="/images/lua.png" alt="Lua" width={128}  height={0} />
                    <Image src="/images/aspnet.png" alt="Asp.Net" width={128}  height={0} />
                    <Image src="/images/mssql.png" alt="Micosoft SQL" width={128}  height={0} />
                    <Image src="/images/yii2.png" alt="Yii 2" width={128}  height={0} />
                    <Image src="/images/docker.png" alt="Docker" width={128}  height={0} />
                    <Image src="/images/git.png" alt="Git" width={128}  height={0} />
                    <Image src="/images/github.png" alt="GitHub" width={128}  height={0} />
                    <Image src="/images/nodejs.png" alt="NodeJS" width={128}  height={0} />
                    <Image src="/images/reactjs.png" alt="React" width={128}  height={0} />
                    <Image src="/images/mongodb.png" alt="MongoDB" width={128}  height={0} />
                    <Image src="/images/html.png" alt="HTML" width={128}  height={0} />
                    <Image src="/images/css.png" alt="CSS" width={128}  height={0} />
                    <Image src="/images/javascript.png" alt="Javascript" width={128}  height={0} />
                    <Image src="/images/php.png" alt="PHP" width={128}  height={0} />
                    <Image src="/images/csharp.png" alt="C#" width={128}  height={0} />
                    <Image src="/images/python.png" alt="Python" width={128}  height={0} />
                    <Image src="/images/phpstorm.png" alt="PHPStorm" width={128}  height={0} />
                    <Image src="/images/mysql.png" alt="MySQL" width={128}  height={0} />
                    <Image src="/images/vscode.png" alt="VS Code" width={128}  height={0} />
                    <Image src="/images/bootstrap.png" alt="Bootstrap" width={128}  height={0} />
                    <Image src="/images/lua.png" alt="Lua" width={128}  height={0} />
                    <Image src="/images/aspnet.png" alt="Asp.Net" width={128}  height={0} />
                    <Image src="/images/mssql.png" alt="Micosoft SQL" width={128}  height={0} />
                    <Image src="/images/yii2.png" alt="Yii 2" width={128}  height={0} />
                    <Image src="/images/docker.png" alt="Docker" width={128}  height={0} />
                    <Image src="/images/git.png" alt="Git" width={128}  height={0} />
                    <Image src="/images/github.png" alt="GitHub" width={128}  height={0} />
                    <Image src="/images/nodejs.png" alt="NodeJS" width={128}  height={0} />
                    <Image src="/images/reactjs.png" alt="React" width={128}  height={0} />
                    <Image src="/images/mongodb.png" alt="MongoDB" width={128}  height={0} />
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
                    <p>I&apos;ve been passionate about web development since the 10th grade, when I began experimenting with basic HTML websites. As I explored further, I found the basics too limiting and quickly moved on to learning JavaScript, enjoying the challenge of building more dynamic and interactive experiences.</p>
                    <p>During college, I worked as a programmer for CSPAN and Purdue University. I originally majored in Actuarial Science, but it became clear that my interests were rooted in technology, so I changed my major to pursue a career in IT.</p>
                    <p>Over the years, I&apos;ve contributed to a range of web applications in the finance and business sectors. I take pride in writing clean, maintainable code and enjoy working on projects that solve meaningful problems for users and teams alike.</p>
                    <p>Outside of work, I continue to learn and grow by exploring tools and frameworks like React, Next.js, and Python. I also enjoy working creatively with Blender and DaVinci Resolve. Staying curious and adaptable is what keeps me excited about technology and the future of this field.</p>
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
                            <Image src="/images/df.png" alt="Drivrz Financial" layout="responsive" width={400} height={300} />
                            <figcaption>Drivrz Financial</figcaption>
                        </div>
                    </figure>
                    <h3>Drivrz Financial</h3>
                    <div>Dec 2021 - May 2024</div>
                    <p>At Drivrz Financial, I contributed to both collaborative Agile development teams and independent projects, ultimately serving as the Lead PHP Developer. My work spanned the full Software Development Life Cycle (SDLC), including sprint planning, daily stand-ups, code reviews, and deployments. I helped onboard and mentor a junior developer and collaborated closely with Business Analysts to translate business requirements into scalable and maintainable technical solutions using PHP, Yii2, JavaScript, AJAX, and jQuery.</p>
                    <p>Key projects included refactoring the role-based permissions system, redesigning the dealer-facing interface for improved UX, implementing drag-and-drop functionality with JavaScript, and modernizing the document upload process using Amazon S3 integration. These efforts enhanced system performance, improved user experience, and increased internal workflow efficiency across the platform.</p>
                </article>
                <article>
                    <figure>
                        <div>
                            <Image src="/images/macallister.png" alt="MacAllister Machinery" layout="responsive" width={400} height={300} />
                            <figcaption>MacAllister Machinery</figcaption>
                        </div>
                    </figure>
                    <h3>MacAllister Machinery</h3>
                    <div>Dec 2014 - Oct 2021</div>
                    <p>At MacAllister Machinery, I contributed to the full software development lifecycle by designing, developing, and enhancing ERP system features using Lua and the LAMP stack, resulting in a company-wide deployment. I administered Atlassian tools including JIRA and Confluence to streamline project management and documentation. Additionally, I maintained and updated the corporate intranet leveraging VB.Net, C#, and Microsoft SQL Server to support internal business operations.</p>
                    <p>Our development process combined waterfall and agile methodologies, incorporating the creation of detailed functional and technical specifications, and participation in biweekly scrum ceremonies. I collaborated cross-functionally with Subject Matter Experts (SMEs) and key business stakeholders to deliver solutions aligned with company objectives.</p>
                </article>
                <article>
                    <figure>
                        <div>
                            <Image src="/images/risque.png" alt="Risque Software Development Group" layout="responsive" width={400} height={300} />
                            <figcaption>Risque Software Development Group</figcaption>
                        </div>
                    </figure>
                    <h3>Risque Software Development Group</h3>
                    <div>Aug 2013 - Dec 2014</div>
                    <p>At Risque Software Development Group, I played an integral role in the full software development lifecycle for Purdue University&apos;s campus-wide networking management website. Utilizing ASP.Net, C#, and Microsoft SQL Server, I developed, maintained, and enhanced key features to ensure high availability and performance of the platform. Working collaboratively within a cross-functional team of 3–5 developers, I participated in code reviews, troubleshooting, and iterative improvements based on user feedback.</p>
                    <p>I contributed to technical documentation and adhered to best practices in version control, testing, and deployment to maintain site reliability and security. This role demanded close coordination with university IT stakeholders to align enhancements with operational needs and campus-wide network policies.</p>
                </article>
            </div>
        </section>
    </main>
    </>
  );
}
