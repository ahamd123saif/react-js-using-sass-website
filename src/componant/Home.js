import React from 'react'
import "../styles/home.scss"
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
  <>
    <div className='home'id='home'>
        <main>
            <h1>Tech Ahamd</h1>
            <p>Solution to all your problem</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="graphics" />

    <div>
        <p>
            We sre only your solution to the tech problems you face
            every day we are leading tech company whose aim is to increase the problem solving ability in younger
        </p>
    </div>
    </div>
    <div className="home3" id='about'>
    <div>
    <h1>who we are ?</h1>
     <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat sed corrupti repellat minus ut qui cumque eum deleniti aut nulla asperiores facere vitae similique ipsam, eligendi nobis facilis animi rerum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat dolorum eos ullam delectus asperiores illum, commodi, ea voluptatibus distinctio minima minus dignissimos? Minus aperiam exercitationem natus sunt voluptatum ex.
     </p>
    </div>
    </div>
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                animationDelay:"0.3s"
            }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{
                animationDelay:"0.5s"
            }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{
                animationDelay:"0.7s"
            }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                
                <div style={{
                animationDelay:"0.3s"
            }}>
                    <AiFillInstagram/>
                    <p>Youtube</p>
                </div>
            </article>
        </div>
    </div>
  </>
  )
}

export default Home;
