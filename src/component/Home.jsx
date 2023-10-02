import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import me from '../assets/portfolio_avatar-removebg-preview.png'


const Home = ({ ratio }) => {



    const clientCount = useRef(null)
    const projectCount = useRef(null)




    const animationClientsCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed())
        })
    }
    const animationProjectCount = () => {
        animate(0, 50, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
        })
    }





    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        }
    }





    return (

        <div id='home'>

            <section>

                <div>

                    <motion.h1 {...animations.h1} >

                        Hi,I Am <br /> Abhinav Sharma

                    </motion.h1>


                    <Typewriter options={{

                        strings: ["A Frontend Developer", "A Designer", "A Creater"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara",

                    }} />



                    <div>

                        <a href="mailto:abhinavparashar486@gmail.com">

                            Hire Me

                        </a>

                        <a href="#word">Projects <BsArrowUpRight /></a>

                    </div>



                    <article>

                        <p>

                            +

                            <motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>

                        </p>

                        <span>Clients Worldwide</span>

                    </article>



                    <aside>

                        <article>

                            <p>

                                +<motion.span whileInView={animationProjectCount} ref={projectCount}>50</motion.span>

                            </p>

                            <span>Projects Done</span>

                        </article>



                        <article data-special>

                            <p>Contact</p>

                            <span>abhinavparashar486@gmail.com</span>

                        </article>

                    </aside>

                </div>

            </section>


            <BsChevronDown />


            <section>

                <img src={me} alt="Abhinav" />

            </section>

        </div>
    )
}

export default Home