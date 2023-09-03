import { useState } from 'react';
import axios from 'axios';

function Contact(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage]  = useState('');

    const handleSubmit = (e)=>{
       try{
            e.preventDefault();
            const data = { username, email, message };
            // send user details to server
             axios.post('https://mail-server-48cv.onrender.com/contact', data)
            .catch((err)=>{ console.log(err); })
            setUsername(''); setMessage(''); setEmail('');
        }catch(err){
            console.log(err);
        }
    }
 
    return(
       <div className='form-wrp'>
         <h2>Contact Us</h2>
         <form onSubmit={handleSubmit}>
            <input type='text' value={username} placeholder='username' 
            onChange={(e)=>{ setUsername(e.target.value); }} required/>

            <input type='email' value={email} placeholder='email' 
            onChange={(e)=>{ setEmail(e.target.value); }} required/>

            <textarea rows='5' cols='50' placeholder='write a message...' className='message'
            value={message} onChange={(e)=>{ setMessage(e.target.value); }} required/> 

            <input type='submit' value='send' />
         </form>
       </div>
    );
}
export default Contact;
