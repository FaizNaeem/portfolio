import React from 'react'
import Faiz from '../Component/assets/hj.jpeg'
import pic2 from '../Component/assets/2.jpg'
import pic3 from '../Component/assets/3.jpg'
import pic4 from '../Component/assets/4.jpg'
import pic1 from '../Component/assets/1.jpg'
import pic6 from '../Component/assets/6.jpg'
import pic10 from '../Component/assets/20155.png'
import pic7 from '../Component/assets/7.jpg'
import pic9 from '../Component/assets/8.png'
import pic8 from '../Component/assets/didital.png'
import pic12 from '../Component/assets/13.png'
import pic15 from '../Component/assets/yt.png'
import picins from '../Component/assets/insta.png'
import picw from '../Component/assets/whats.png'
import swal from 'sweetalert'


import About2 from './About.css'




function About(){


  function Sub() {

      

    if (document.getElementById("blank").value==('')) {
      document.getElementById("blank").style.backgroundColor =  "red" ;
       swal ( "Oops" ,  "Please Fill this!" ,  "error" )
      
        return false;

    } 
  
    if (document.getElementById("blank2").value==('')) {
      document.getElementById("blank2").style.backgroundColor =  "red" ;
       swal ( "Oops" ,  "Please Fill this!" ,  "error" )

        return false;

    } 
     
    else{
      swal("Thank You!", "You clicked the button!", "success");
    }

          
  }

  

    return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  m jk">
  <div className="container-fluid contant">
    <img className="image" src={Faiz}/>
    <button className="navbar-toggler lk" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="text=nav" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="text=nav " aria-current="page" href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a className="text=nav" href="#Portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="text=nav" href="#Services">Services</a>
        </li>
        <li className="nav-item">
          <a className="text=nav" href="#contact">Contact Me</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
<section className="Home"id="home">
  <div className="main">
  <h1 className="heading"> Hello i'am Faiz Naeem </h1>
  <div className="wrapper">
    <div className ="static-text"> and I'am a Frontend Developer </div>
      
 
     </div>
    
  </div>
  <div className="buttom" >
     <a className="button" href="#about">View My work</a>
     </div>
  
</section>
<section className="About" id="about">
  <div className="main-div">
<h1 className="h1">About Me</h1>
<div className="about-main">
<div class="row">
    <div class="col-lg-7 col-md-7 col-sm-7">
<div className="" >
<p className="text"> I am a highly Front End Developer looking for a role that challenges my skill set and provides strong opportunities. I am Passionate about building first-class web and my core expertise is in Reactjs   web Development. My employers have considered me to be great at problem solving and performing well with a team structure. Thanks</p></div>



    </div>

    <div class=" col-lg-5 col-md-5 col-sm-5">


    <div class="skill-mf">
       <div class="ro" ><p>HTML5</p> <p className="pull-right s1">90%</p></div> <div class="progress"><div class="progress-bar skill-1" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div></div>
        
       <div class="ro" ><p>CSS 3</p> <p class="pull-right s2">60%</p></div> <div className="progress"><div class="progress-bar skill-2" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div></div>


       <div class="ro" ><p>Javascript</p> <p class="pull-right s3">50%</p></div> <div class="progress"><div class="progress-bar skill-3" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div></div>

       <div class="ro" ><p>Bootstrap</p> <p class="pull-right s4">65%</p></div> <div class="progress"><div class="progress-bar skill-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div></div>

       <div class="ro" ><p>React Js</p> <p class="pull-right s5">70%</p></div> <div class="progress"><div class="progress-bar skill-5" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div></div>

        


        </div>
    </div>
</div>
    
</div>
  </div>
</section>
<section className="portfolio" id="Portfolio">
  <h1 className=""> PORTFOLIO</h1>
  <div className="gellery">
  <a href={pic2} data-lightbox="model" data-title="sadas"><img src={pic2}/></a>
    <a href={pic3} data-lightbox="models" data-title="sadas"><img src={pic3}/></a>
    <a href={pic4} data-lightbox="models" data-title="sadas"><img src={pic4}/></a>
    <a href={pic1} data-lightbox="models" data-title="sadas"><img src={pic1}/></a>
    <a href={pic6} data-lightbox="models" data-title="sadas"><img src={pic6}/></a>
    <a href={pic7} data-lightbox="models" data-title="sadas"><img src={pic7}/></a>
    
  </div> 

 </section>
 <section className="services" id="Services">
   <h1 className="color">SERVICES</h1>
   <div className="row mn">
     <div className="box">
     <img className="small" src={pic8}/>
       <h1>Website </h1>
       In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. 
    
     </div>
     <div className="box2">
     <img className="small" src={pic9}/>
       <h1>UI/UX</h1>
       In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. 
     </div>
     <div className="box3">
     <img className="small" src={pic8}/>
       <h1>MARKETING</h1>
       In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. 
     </div>
    
   </div>
 </section>
 <section className="Contact" id="contact">
   <h1>CONTACT US</h1>
   <form className="form">
     <input type="text" name="Name" className="input" id="blank" placeholder="Enter Your Name"/>
<input type="email" name="email" className="input" id="blank2"placeholder="Enter Your Email"/>
<textarea name="msg " className="msg" cols="30" rows="10" placeholder="Enter Your Massege"> </textarea>
<input type="submit" value="SEND" onClick={Sub} className="SEND"/>
     
<div className="rom">
    <a href="https://github.com/FaizNaeem"> <img className="github" src={pic12}/></a>
    <a href="https://www.facebook.com/areeb.alam.2312"> <img className="github" src={pic15}/></a>
    <a href="https://www.instagram.com/faiz_naeem.0/"> <img className="github" src={picins}/></a>
    <a href="https://api.whatsapp.com/send/?phone=923221134678&text=hellow+world&app_absent=0"> <img className="github" src={picw}/></a>
   </div>
   </form>
 </section>
 
 
    </div>
    )
}
export default About;