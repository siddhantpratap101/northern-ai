import React from "react";
import "../App.css";
import bg1 from "../assets/pictures/background1.jpg";
import Navbar from "../components/Navbar";
import northernVideo from "../assets/videos/northern_ai.mp4";
import Marquee from "react-fast-marquee";
import Image1 from "../assets/pictures/image1.png";
import Image2 from "../assets/pictures/image2.png";
import Image3 from "../assets/pictures/image3.png";
import Robo from "../assets/pictures/ai.png";
import Twitter from "../assets/pictures/twitter.png";
import Facebook from "../assets/pictures/facebook.png";
import LinkedIn from "../assets/pictures/linkedin.png";
import Instagram from "../assets/pictures/instagram.png";
import Whatsapp from "../assets/pictures/whatsapp.png";
import Youtube from "../assets/pictures/youtube.png";
import Admin from "../assets/pictures/admin.png";
import Footer from "../components/Footer";
import Toi from "../assets/pictures/toi.png";
import TechChrunch from "../assets/pictures/techCrunch.png";
import Inshorts from "../assets/pictures/inshorts.png";
import neet from "../assets/pictures/Neet.png";
import cat from "../assets/pictures/CAT.png";
import upsc from "../assets/pictures/upsc.png";
import mbbs from "../assets/pictures/MBBS.png";
import blogger from "../assets/pictures/bloggerBlogAi.png";
import linkedIn from "../assets/pictures/linkedInBlogAi.png";
import ecommerce from "../assets/pictures/ECommerce.png";
import awwward from "../assets/pictures/awwward.png";
import dribble from "../assets/pictures/dribble.png";
import admiretheweb from "../assets/pictures/admiretheweb.png";

function Home() {
  return (
    <div>
      <div className="backgroundImages">{<img src={bg1} alt="bg1" />}</div>
      <Navbar />
      {/* <h1 className="naiHome">NORTHERN AI</h1> */}
      <div class="wrapper">
        <div class="static-txt">We provide</div>
        <ul class="dynamic-txt">
          <li>
            <span>READ TO SPEED</span>
          </li>
          <li>
            <span> DESIGN WITH AI</span>
          </li>
          <li>
            <span> BLOG WITH AI</span>
          </li>
          <li>
            <span> NEWS WITH AI</span>
          </li>
          {/* <li> */}
          {/* <span>READ TO SPEED</span> */}
          {/* </li> */}
          {/* <li> */}
          {/* <span>NOTES WITH AI</span> */}
          {/* </li> */}
        </ul>
      </div>
      <div className="northernVideo">
        <video src={northernVideo} autoPlay loop muted></video>
      </div>
      <br />
      <div className="btnVid">
        <button className="btnVideo">
          Automate your learning with <span className="FORTtitle">FORT</span>
        </button>
      </div>
      <br />
      <p className="paraBelowAutobtn">
        <span className="FORTtitle">FORT</span> helps aspirants to{" "}
        <span className="SpanInPara">READ TO SPEED</span> their{" "}
        <span className="SpanInPara">VARC</span> and crack..
      </p>
      <div className="examImages">
        <img src={neet} alt="" />
        <img src={upsc} alt="" />
        <img src={cat} alt="" />
      </div>
      <br />
      <br />

      <div className="firstMarquee">
        <Marquee
          behavior="scroll"
          direction="right"
          pauseOnHover
          speed={80}
          gradient={false}
          play={true}
        >
          <div className="h3text">
            <h3>Text-to-speech</h3>
          </div>
          <div className="h3text">
            <h3> auto scrolling </h3>
          </div>
          <div className="h3text">
            <h3> word scrolling up </h3>
          </div>
          <div className="h3text">
            <h3> Imersive mode </h3>
          </div>
          <div className="h3text">
            <h3> Gesture mode </h3>
          </div>
        </Marquee>
      </div>
      <br />
      <br />
      <p className="underUpscLogo">
        ..And helps prepare professional study{" "}
        <span className="SpanInPara">NOTES</span> for..
      </p>
      <div className="mbbsLogo">
        <img src={mbbs} alt="" />
        <h3>MEDICAL COURSES</h3>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="secondtMarquee">
        <Marquee
          behavior="scroll"
          direction="left"
          pauseOnHover
          speed={80}
          gradient={false}
          play={true}
        >
          <div className="h3text">
            <h3>Normal-scroll-up</h3>
          </div>
          <div className="h3text">
            <h3> word pop-up </h3>
          </div>
          <div className="h3text">
            <h3> Dictation mode </h3>
          </div>
          <div className="h3text">
            <h3> soothing music </h3>
          </div>
          <div className="h3text">
            <h3> Daily post </h3>
          </div>
        </Marquee>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="leftImageArticle">
        <img src={Image1} alt="img" />
        <p>
          <h2>NEWS.AI</h2>
          Get the latest news mentions of a person, company, location, etc.
          Supporting a platform that requires real-time news content. Access to
          the full stream of news and blogs as they are collected. Extract
          historical news content from our dataset. Build a news or event
          dataset for research purposes. Extract market trends, analyze specific
          industry, track competitors and customers. Track news reach and
          virality of a person, company, product or topic of interest.
        </p>
      </div>
      <p className="brandingTitle">
        OUR <span className="spanNews">NEWS.AI</span> GETS FEATURED IN{" "}
      </p>
      <div className="branding">
        <img src={Toi} alt="" />
        <img src={TechChrunch} alt="" />
        <img src={Inshorts} alt="" />
      </div>
      <div className="rightImageArticle">
        <p>
          <h2>BLOG.AI/SAAS</h2>
          In a SaaS application, automation involves automating multiple tasks
          that are usually carried out by humans. In addition to saving time,
          automating these tasks can also reduce the chances of human errors
          occurring. Essentially, SaaS automation tools help SaaS companies do
          more with less. It can be used for a variety of things, including
          email marketing, social media marketing, customer support, lead
          generation, web analytics, and so on.
        </p>
        <img src={Image2} alt="img" />
      </div>
      <p className="brandingTitle">
        OUR <span className="spanNews">BLOG.AI</span> GETS FEATURED IN{" "}
      </p>
      <div className="branding">
        <img src={blogger} alt="" />
        <img src={ecommerce} alt="" />
        <img src={linkedIn} alt="" />
      </div>
      <h3>E-COMMERCE STORES</h3>
      <p className="brandingTitle">
        Being trusted by <span className="spanNews">thousands</span> of...{" "}
      </p>
      <div className="trusted">
        <div className="spanNews">Freelancers</div>
        <div className="spanNews">Marketing Teams</div>
        <div className="spanNews">SEO</div>
        <div className="spanNews">Entrepreneurs</div>
      </div>
      <div className="leftImageArticle">
        <img src={Image3} alt="img" />
        <p>
          <h2>DESIGN.AI</h2>
          Our products enable a wholistic engineering of production systems from
          mechanical concept through to complete PLC code. Discover a whole new
          level of collaboration with a toolset that enables a complete machine
          and plant design workflow, providing the highest level of design
          quality in the shortest time possible. Automation Designer offers a
          one-of-a-kind engineering toolset, designed from the ground up to
          enable controls engineers to complete their work with the highest
          efficiency, quality and speed possible.
        </p>
      </div>
      <p className="brandingTitle">
        OUR <span className="spanNews">DESIGN.AI</span> is a{" "}
        <span className="spanNews">BEST-SELLER</span> on...{" "}
      </p>
      <div className="branding">
        <img src={dribble} alt="" />
        <img src={awwward} alt="" />
        <img src={admiretheweb} alt="" />
      </div>
      <div className="branding">
        <div className="spanNews">Dribble.com</div>
        <div className="spanNews">Awwwards.com</div>
        <div className="spanNews">admiretheweb.com</div>
      </div>
      <div className="rightImageArticle">
        <p>
          <h2>ASK.AI</h2>
          The General Problem Solver (GPS) was an AI program proposed by Herbert
          Simon, J.C. Shaw, and Allen Newell. It was the first useful computer
          program that came into existence in the AI world. The goal was to make
          it work as a universal problem-solving machine. Of course there were
          many software programs that existed before, but these programs
          performed specific tasks. GPS was the first program that was intended
          to solve any general problem. GPS was supposed to solve all the
          problems using the same base algorithm for every problem.
        </p>
        <img src={Image2} alt="img" />
      </div>
      <div className="roboPic">
        <img src={Robo} alt="roboPic" />
        <h4>CHAT.AI</h4>
      </div>
      <div className="emptyFrame">
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
        <div className="frame"></div>
      </div>
      <div className="admin-social">
        <div className="admin">
          <img src={Admin} alt="" />
          <h5>ADMIN</h5>
        </div>
        <div className="social">
          <img src={Twitter} alt="twitter" />
          <img src={Facebook} alt="facebook" />
          <img src={LinkedIn} alt="likedIn" />
          <img src={Instagram} alt="instagram" />
          <img src={Whatsapp} alt="whatsapp" />
          <img src={Youtube} alt="youtube" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
