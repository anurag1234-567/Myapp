import { useState, useRef } from 'react';
import storage from './firebase';
import { ref, uploadBytes } from "firebase/storage";
import axios from 'axios';

function App(){
     
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile]= useState(null);
    const fileRef = useRef(null);
    const [filesizeExceed, setFilesizeExceed] = useState(false);

    const handleSubmit = async (e)=>{
        try{
            e.preventDefault();
            if(file.size > 25e6){
                setFilesizeExceed(true);
                return;  }

            const data = { username, description, email, filename: file.name };
            const storageRef = ref(storage, `uploads/${file.name}`);
            // upload file on firebase storage
            await uploadBytes(storageRef, file);
            // send uploaded file details to server
            axios.post('https://mail-server-48cv.onrender.com/upload', data)
            .catch( (err) => { console.log(err) }); 

            setUsername(''); setDescription(''); setEmail(''); setFile(null); 
            fileRef.current.value = null;
            alert('file uploaded successfully');
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className='form-wrp'>
         <h2>Upload Paper</h2>
         <form onSubmit={handleSubmit} >
           <input type='text' value={username} placeholder='username'
           onChange={(e)=>{ setUsername(e.target.value); }} required/>

           <input type='email' value={email} placeholder='email'
           onChange={(e)=>{ setEmail(e.target.value); }} required/>

           <input type='text' value={description} placeholder='description'
           onChange={(e)=>{ setDescription(e.target.value); }} required/>

           <input type='file' ref={fileRef} onChange={(e)=>{ setFile(e.target.files[0]); }} required/>
           { filesizeExceed && <p className='filesizeError'>* File size exceeded 25Mb.</p> }
           
           <input type='submit' value='Upload' />
         </form>
        </div>
    );
}
export default App;
