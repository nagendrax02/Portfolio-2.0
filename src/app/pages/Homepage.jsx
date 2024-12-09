import React from "react";
import { Link } from "react-scroll";

function Homepage(){

    return <>
            {/* Hero section code starts here */}

            <section className="hero full-screen">
                {/* <span>Creating meaningful <br/> products  from <br/> innovative ideas drives me.</span> */}
                <span className="hello">Hello!</span>
                <h1 className="name">I'm <span className="name-span">Nagendra</span></h1>
                <h2 className="role">Frontend Developer | Problem Solver</h2>
                <Link to="about" smooth={true} duration={500}>
                <button>
                    Learn more
                </button>
                </Link>
            </section>

            <section id="about">
                <h2>About me</h2>
                <img src="https://placehold.co/200x200/png" alt="Nagendra" />
                <p>Frontend developer with 3+ years of experience</p>
                <Link>
                    <button>Explore my skills</button>
                </Link>
            </section>

            {/* hero section code ends here */}
    </>
}

export default Homepage