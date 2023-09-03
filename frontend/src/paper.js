import {ref, getDownloadURL} from 'firebase/storage';
import storage from './firebase';
import './App.css';

function Paper(){

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
      <>
        <h2 className='center'>B.Tech CSE Qus Paper</h2>

        <div className='paper-main'>

          <div className='paper-wrp'>
          <h2>3rd Sem</h2>
          <div className='paper-container'>
          <p onClick={()=>{ handleDownload('3rd Sem/Principles of Programming languages 2021.pdf'); }}>Principles of Programming languages 2021</p>
          <p onClick={()=>{ handleDownload('3rd Sem/Principles of Programming languages 2020.pdf'); }}>Principles of Programming languages 2020</p>
          <p onClick={()=>{ handleDownload('3rd Sem/Digital Electronics 2021.pdf'); }}>Digital Electronics 2021</p>
          <p onClick={()=>{ handleDownload('3rd Sem/Digital Electronics 2020.pdf'); }}>Digital Electronics 2020</p>
          <p onClick={()=>{ handleDownload('3rd Sem/Mathematics-III 2021.pdf'); }}>Mathematics-III 2021</p>
          <p onClick={()=>{ handleDownload('3rd Sem/Mathematics-III 2020.pdf'); }}>Mathematics-III 2020</p>
          <p onClick={()=>{ handleDownload('3rd Sem/OOPS 2021.pdf'); }}>Object Oriented Programming 2021</p>
          <p onClick={()=>{ handleDownload('3rd Sem/OOPS 2020.pdf'); }}>Object Oriented Programming 2020</p>
          <p onClick={()=>{ handleDownload('3rd Sem/Data Structure & Algorithms 2021.pdf'); }}>Data Structure & Algorithms 2021</p>
          <p onClick={()=>{ handleDownload('3rd Sem/Data Structure & Algorithms 2020.pdf'); }}>Data Structure & Algorithms 2020</p>
          <p onClick={()=>{ handleDownload('3rd Sem/BIE 2021.pdf'); }}>Business Intelligence & Enterpreneurship 2021</p>
          <p onClick={()=>{ handleDownload('3rd Sem/BIE 2020.pdf'); }}>Business Intelligence & Enterpreneurship 2020</p>
          </div>
          </div>

          <div className='paper-wrp'>
          <h2>4th sem</h2>
          <div className='paper-container'>
          <p onClick={()=>{ handleDownload('4th sem/Discrete Mathematics 2022.pdf'); }}>Discrete Mathematics 2022</p>
          <p onClick={()=>{ handleDownload('4th sem/Discrete Mathematics 2021.pdf'); }}>Discrete Mathematics 2021</p>
          <p onClick={()=>{ handleDownload('4th sem/Internet Technology & Management 2022.pdf'); }}>Internet Technology & Management 2022</p>
          <p onClick={()=>{ handleDownload('4th sem/Internet Technology & Management 2021.pdf'); }}>Internet Technology & Management 2021</p>
          <p onClick={()=>{ handleDownload('4th sem/Operating System 2022.pdf'); }}>Operating System 2022</p>
          <p onClick={()=>{ handleDownload('4th sem/Operating System 2021.pdf'); }}>Operating System 2021</p>
          <p onClick={()=>{ handleDownload('4th sem/Design & Analysis of Algorithms 2022.pdf'); }}>Design & Analysis of Algorithms 2022</p>
          <p onClick={()=>{ handleDownload('4th sem/Design & Analysis of Algorithms 2021.pdf'); }}>Design & Analysis of Algorithms 2021</p>
          <p onClick={()=>{ handleDownload('4th sem/UHV 2022.pdf'); }}>Universal Human Values 2022</p>
          </div>
          </div>


          <div className='paper-wrp'>
          <h2>5th sem</h2>
          <div className='paper-container'>
          <p onClick={()=>{ handleDownload('5th sem/Microprocessor & Interfacing 2021.pdf'); }}>Microprocessor & Interfacing 2021</p>
          <p onClick={()=>{ handleDownload('5th sem/Microprocessor & Interfacing 2020.pdf'); }}>Microprocessor & Interfacing 2020</p>
          <p onClick={()=>{ handleDownload('5th sem/Database Management System 2021.pdf'); }}>Database Management System 2021</p>
          <p onClick={()=>{ handleDownload('5th sem/Database Management System 2020.pdf'); }}>Database Management System 2020</p>
          <p onClick={()=>{ handleDownload('5th sem/FLAT 2021.pdf'); }}>Formal Language & Automata Theory 2021</p>
          <p onClick={()=>{ handleDownload('5th sem/FLAT 2020.pdf'); }}>Formal Language & Automata Theory 2020</p>
          <p onClick={()=>{ handleDownload('5th sem/Essential of Information Technology 2021.pdf'); }}>Essential of Information Technology 2021</p>
          <p onClick={()=>{ handleDownload('5th sem/Essential of Information Technology 2020.pdf'); }}>Essential of Information Technology 2020</p>
          <p onClick={()=>{ handleDownload('5th sem/Computer Organization & Architecture 2021.pdf'); }}>Computer Organization & Architecture 2021</p>
          <p onClick={()=>{ handleDownload('5th sem/Computer Organization & Architecture 2020.pdf'); }}>Computer Organization & Architecture 2020</p>
          <p onClick={()=>{ handleDownload('5th sem/Advanced Algorithms 2021.pdf'); }}>Advanced Algorithms 2021</p>
          <p onClick={()=>{ handleDownload('5th sem/Advanced Algorithms 2020.pdf'); }}>Advanced Algorithms 2020</p>
          </div>
          </div>

          <div className='paper-wrp'>
          <h2>6th sem</h2>
          <div className='paper-container'>
          <p onClick={()=>{ handleDownload('6th sem/Compiler Design 2022.pdf'); }}>Compiler Design 2022</p>
          <p onClick={()=>{ handleDownload('6th sem/Compiler Design 2021.pdf'); }}>Compiler Design 2021</p>
          <p onClick={()=>{ handleDownload('6th sem/Computer Networks 2022.pdf'); }}>Computer Networks 2022</p>
          <p onClick={()=>{ handleDownload('6th sem/Computer Networks 2021.pdf'); }}>Computer Networks 2021</p>
          <p onClick={()=>{ handleDownload('6th sem/Unix & Linux Programming 2022.pdf'); }}>Unix & Linux Programming 2022</p>
          <p onClick={()=>{ handleDownload('6th sem/Unix & Linux Programming 2021.pdf'); }}>Unix & Linux Programming 2021</p>
          <p onClick={()=>{ handleDownload('6th sem/MAD 2022.pdf'); }}>Mobile Adhoc & Wireless Sensor Networks 2022</p>
          <p onClick={()=>{ handleDownload('6th sem/MAD 2021.pdf'); }}>Mobile Adhoc & Wireless Sensor Networks 2021</p>
          <p onClick={()=>{ handleDownload('6th sem/SSI 2022.pdf'); }}>Soft Skills & Interpersonal Communication 2022</p>
          <p onClick={()=>{ handleDownload('6th sem/SSI 2021.pdf'); }}>Soft Skills & Interpersonal Communication 2021</p>
          </div>
          </div>

          <div className='paper-wrp'>
          <h2>7th sem</h2>
          <div className='paper-container'>
          <p onClick={()=>{ handleDownload('7th sem/SVVT 2022.pdf'); }}>Software Verification & Validation & Testing 2022</p>
          <p onClick={()=>{ handleDownload('7th sem/Expert Systems 2022.pdf'); }}>Expert Systems 2022</p>
          <p onClick={()=>{ handleDownload('7th sem/Expert Systems 2021.pdf'); }}>Expert Systems 2021</p>
          <p onClick={()=>{ handleDownload('7th sem/Cyber Law & Ethics 2022.pdf'); }}>Cyber Law & Ethics 2022</p>
          <p onClick={()=>{ handleDownload('7th sem/Cyber Law & Ethics 2021.pdf'); }}>Cyber Law & Ethics 2021</p>
          </div>
          </div>

          <div className='paper-wrp'>
          <h2>8th sem</h2>
          <div className='paper-container'>
          <p onClick={()=>{ handleDownload('8th sem/Computer Graphics 2023.pdf'); }}>Computer Graphics 2023</p>
          <p onClick={()=>{ handleDownload('8th sem/Computer Graphics 2021.pdf'); }}>Computer Graphics 2021</p>
          <p onClick={()=>{ handleDownload('8th sem/Web & Internet Technology 2023.pdf'); }}>Web And Internet Technology 2023</p>
          <p onClick={()=>{ handleDownload('8th sem/Web & Internet Technology 2022.pdf'); }}>Web & Internet Technology 2022</p>
          <p onClick={()=>{ handleDownload('8th sem/Cyber Security 2023.pdf'); }}>Cyber Security 2023</p>
          <p onClick={()=>{ handleDownload('8th sem/Cyber Security 2022.pdf'); }}>Cyber Security 2022</p>
          <p onClick={()=>{ handleDownload('8th sem/Cloud Computing 2023.pdf'); }}>Cloud Computing 2023</p>
          <p onClick={()=>{ handleDownload('8th sem/Cloud Computing 2022.pdf'); }}>Cloud Computing 2022</p>
          </div>
          </div>
          
        </div>
      </>
    );
}
export default Paper;