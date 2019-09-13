import React from 'react';
import './App.css';
import Footer from './components/footer'
import Navbar from './components/navbar'
import Slideshow from './components/slideshow'


function App() {
  return (
    <div> <Navbar/>
    <div className="entirepage">  
    <div className="leftdisplay">
    <p className="lefttitle"> Contact Info: </p> 
    <p className="leftcaption"> Email: </p> 
      <p className="leftbody"> torrynsaker@outlook.com </p> 
      <p className="leftcaption"> Linked In: </p>  
      <p className="leftbody">  https://www.linkedin.com/in/torryn-saker-319912b5/  </p>  
      <p className="leftcaption"> Github:</p> 
      <p className="leftbody">  https://github.com/TSaker95 </p>


    </div>
    <div className="mainpage">
      <h1 className="pagecaption"> Torryn Saker </h1>
      <div className="sectionslideshow"> <Slideshow/> </div>

      <p className="title">  About Me </p> 
      <p className="body"> I have lived in Brisbane for almost 20 years, moving here from England in 2000. I am fun loving, creative and love learning and doing new things. A few months ago, i took my life in a new direction at Coder Academy. Learning new skills and topics which I previously knew very little about. It has been a short, intese and rewarding journey and I look forward to seeing where it can take me! </p>  
      <p className="title">  Education </p>
      <p className="body"> Graduated high school from: Moreton Bay Boys College, 2012.
     <br/> <br/> Studied a Bachelor of Teaching at: Australian Catholic
University, but left early to pursue a career in IT.
<br/> <br/> Graduated from a six month intensive at:
Coder Academy as of 17/9/19.</p> 
      <p className="title">  Experience </p>
      <p className="body"> 4 week internship at Genie Solutions:
Understanding a developer workplace environment and
its expectations. <br/> <br/>

Experiencing how teams utilizing agile, work together
to break down projects into manageable chunks over
the course of two week sprints, creating a presentable
product for clients and discussing methods to improve
productivity before moving onto the next sprint. <br/> <br/>

 Developing the ability to jump into unfamiliar code in
order to understand it well enough to add to it. <br/> <br/>

 Working on an automation testing tool called
"Genasys", using a language new to me (Typescript). It
was an Electron app that wrapped a React App. <br/> <br/>

Learning more advanced features of git (amending and
squashing commits, rebasing on master, fixing merge
conflicts, etc.) </p> 

      <p className="title">  Projects </p>
      <p className="body"> 
      Terminal App:
Working with Ruby in a group of two, we made a fun
terminal app based on a game show.
<br/> <br/>
Link: 
https://github.com/TSaker95/Terminal_App-1
<br/> <br/>
Two Way Market place:
Created a two way marketplace in a team of three, using
Rails. <br/> <br/>
Link:
 https://github.com/TSaker95/marketplacev2 <br/> <br/>

 Real World Application: Grocer-React-Website:
Working in a team of three, our group had to find a client to
design a application using a variety of tools. Deciding to
make a website that would display specials and other
information for a small Grocery store. Connecting a
backend to a frontend site. Hosting the site itself on
Heroku. <br/> <br/>
GitHub:
 https://github.com/TSaker95/Grocer-React-Website <br/> <br/>
Link:
 https://hillsdongrocer.herokuapp.com/#Specials <br/> <br/>

 Personal Website: Book Related Information.
Wanting to make a page dedicated to the world building for
my Novel.
I created a responsive website using HTML and
CSS, before starting to make a new site in React. <br/> <br/>
Old Site:
https://tsaker95.github.io/A_New_Civilisation/index.html <br/> <br/>
New Site:
https://tsaker95.github.io/newciv-react-site/? 
fbclid=IwAR2HWF9hSJKbvRd0KEJXEdfQjuPj3oG3rbOthe6n
wWoIl6x5VISHcp1mufM <br/> <br/>

      </p> 
    </div>
  
    
   
    </div> 
    <Footer/>
    </div>
    
    
  );
}

export default App;
