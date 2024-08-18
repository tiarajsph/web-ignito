import React from 'react';
import './Contact.css';
import icon from '../../assets/msg.png';
import mail from '../../assets/mail.png';
import loc from '../../assets/loc.png';
import phone from '../../assets/call.png';
import submit from '../../assets/submit.png';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "078af1f8-26e9-4abd-b216-10fdd7b9a824");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={icon} alt='Message icon' /></h3>
                <p>
                    Thank you for your interest in Ignito Tech Fest! If you have any questions, suggestions, or need further information, please don't hesitate to reach out to us. You can contact us via email at contact@ignitotechfest.com or call us at (123) 456-7890. We're here to help and look forward to hearing from you. Stay connected and follow us on our social media channels for the latest updates and announcements. Let's ignite the future of technology together!
                </p>
                <ul>
                    <li><img src={mail} alt='Email icon' />tiarajoseph1855@gmail.com</li>
                    <li><img src={loc} alt='Location icon' /> +1 123-345-456</li>
                    <li><img src={phone} alt='Phone icon' />Random College of Nowhere<br />Still nowhere</li>
                </ul>
            </div>
            <div className="contact-col">
                <form on onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />
                    
                    <label>Phone number</label>
                    <input type='tel' name='phone' placeholder='Enter your mobile number' required />
                    
                    <label>Write your message here</label>
                    <textarea name='message' rows={6} placeholder='Enter your message' required />
                    <button type='submit' className='btn dark'>Submit<img src={submit} alt='Submit icon' /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
