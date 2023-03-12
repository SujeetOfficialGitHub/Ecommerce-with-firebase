import React, {useState, useRef} from 'react'
import classes from './Contact.module.css'

const ContactForm = () => {
    const [contactData, setContactData] = useState()
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        const enteredData = {
            name:nameRef.current.value,
            enail:emailRef.current.value,
            phone:phoneRef.current.value,
        }
        setContactData(enteredData)
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        contactDataSendHandler()
    }
    // send contact data to database 
    const contactDataSendHandler = async () => {
        const res = await fetch('https://food-order-873d6-default-rtdb.firebaseio.com//contactUs.json',{
            method: 'POST',
            body:JSON.stringify(contactData),
            headers: {
                'Content-type': 'application/json'
            }
        })
        

    }

  return (
    <div className={classes['contact-form']}>
        <h2>Contact us</h2>
        <form onSubmit={submitHandler} action="">
            <div className={classes['input-box']}>
                <label htmlFor="name">Name</label><br />
                <input type="text" ref={nameRef} name="" id="" />
            </div>
            <div className={classes['input-box']}>
                <label htmlFor="email">Email</label><br />
                <input type="email" ref={emailRef} name="" id="" />
            </div>
            <div className={classes['input-box']}>
                <label htmlFor="phone">Phone</label><br />
                <input type="tel" ref={phoneRef} name="" id="" />
            </div>
            <div className={classes['submit-btn']}>
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
  )
}

export default ContactForm