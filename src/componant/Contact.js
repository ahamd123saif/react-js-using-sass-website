import React from 'react'
import "../styles/contact.scss"

const Contact = () => {
  return (
    <>
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Abc'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='Abc@gmail'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='tell us about...'/>
                </div>
                <button type='subumit'>subumit</button>
            </form>
        </main>
    </div>
    </>
      

  )
}

export default Contact
