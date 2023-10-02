import React from 'react'
import imgSrc from '../assets/Cropped_Image.png'
import { AiFillCodepenCircle, AiFillGithub, AiFillInstagram, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {

    return (

        <footer>

            <div>

                <img src={imgSrc} alt="Founder" />
                <h2>ΔβĦƗŇΔV ŞĦΔŘΜΔ</h2>
                <p>अंत ही प्रारम्भ है</p>
                <p>ѕιмρℓє ℓινιηg нιgн тнιηкιηg</p>
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>

                    <a href="https://instagram.com/abhinav.parashar2505" target='blank'>
                        <AiFillInstagram />
                        Instagram
                    </a>

                    <a href="https://github.com/abhinavsharma486" target='blank'>
                        <AiFillGithub />
                        Github
                    </a>

                    <a href="https://vercel.com/dashboard/abhinavsharma486" target='blank'>
                        Varcel
                    </a>

                    <a href="https://app.netlify.com/teams/abhinavsharma486/overview" target='blank'>
                        Netlify
                    </a>

                    <a href="https://codepen.io/abhinavsharma486" target='blank'>
                        <AiFillCodepenCircle />
                        CodePen
                    </a>

                </article>
            </aside>
            <a href="#home"> <AiOutlineArrowUp /> </a>


        </footer>

    )
}

export default Footer