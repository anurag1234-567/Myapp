import { useNavigate } from "react-router-dom";
import Footer from './footer.js';

function Home(){

    const navigate = useNavigate();

    return(
        <>
     <div className='home'>
       <div className='previous-paper' onClick={()=>{ navigate('/previous-paper'); }}>
     <img src='f5.jpeg' alt='f1'/>
          B.Tech CSE Previous Paper
       </div>
       <div className='syllabus' onClick={()=>{ navigate('/syllabus')}}>
     <img src='f2.jpeg' alt='f1'/>
          Syllabus
       </div>
       <div className='roadmap' onClick={()=>{ window.open('https://roadmap.sh/', '_blank'); }} >
         <img src='l5.jpeg' alt='f5'/>
         Developer Roadmap
       </div>
     </ div>
       <Footer />
        </>
    );
}
export default Home;