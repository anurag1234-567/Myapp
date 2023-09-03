import {ref, getDownloadURL} from 'firebase/storage';
import storage from './firebase';


function Syllabus(){

    const handleDownload = async(name) =>{
        try{
          const url = await getDownloadURL(ref(storage, name));
    
             // This can be downloaded directly:
          const xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = (event) => {
          const blob = xhr.response;
          const a = document.createElement('a');
          const href = URL.createObjectURL(blob);
          a.setAttribute('href', href);
          a.setAttribute('download', name);
      
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(href);
        };
        
        xhr.open('GET', url);
        xhr.send();
        }catch(err){
          console.log(err);
        }
      }

    return(
     <div className='syllabus-wrp'>
      <h2>Syllabus</h2>
      <p onClick={()=>{ handleDownload('syllabus/B.Tech CSE 1st year syllabus.pdf'); }}>4th year syllabus</p>
      <p onClick={()=>{ handleDownload('syllabus/B.Tech CSE 2nd year syllabus.docx'); }}>3rd year syllabus</p>
      <p onClick={()=>{ handleDownload('syllabus/B.Tech CSE 3rd year syllabus.docx'); }}>2nd year syllabus</p>
      <p onClick={()=>{ handleDownload('syllabus/B.Tech CSE 4th year syllabus.docx'); }}>1st year syllabus</p>
     </div>
    );
}
export default Syllabus;