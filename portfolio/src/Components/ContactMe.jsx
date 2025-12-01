import "./Contact.css";
import "./Common.css";
import {useState} from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function ContactMe(props)
{
    let[email,setEmail]=useState("");
    let[name,setName]=useState("");
    let[message,setMsg]=useState("");

    function handleSubmit(event)
    {
      event.preventDefault();
      let data={
          name,
          email,
          message
      };
      console.log(data)
      emailjs.send("service_rd50b7k","template_ujuo06x",data,"5PZIxzVAm7wi_HLvs")
      .then(()=>
      {
         setName("");
         setEmail("");
         setMsg("");
         setMsg("Successfully Sent");
         setTimeout(()=>{setMsg("")}, 3000);
      })
      .catch((e)=>console.log(e))
    }
    return(
        <div className='common' theme={props .dabaa? "dark":"light"}>
       
        <form className="contact" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            name="name" 
            type="text"
            onChange={(ele)=>setName(ele.target.value)}
            value={name}
            />

            <label htmlFor="email">Email</label>
            <input 
            name="email"
            type="email"
            onChange={(ele)=>setEmail(ele.target.value)}
            value={email}
            />

            <label htmlFor="message">Message</label>
            <textarea 
            className="msg"
            name="message" 
            type="text"
            onChange={(ele)=>setMsg(ele.target.value)}
            value={message}
            />
            <button id="btn" type="submit">SEND</button>
            
            
            <div className="social-icons">
            <a href="https://www.linkedin.com/in/sakshi-chavan-345ab2345" target="_blank" rel="">
            <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/Sakshi13-05" target="_blank" rel="">
            <FaGithub size={40} />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="">
            <FaTwitter size={40} />
            </a>
            </div>
            </form>
 
</div>
       
        
    )
}
export default ContactMe;