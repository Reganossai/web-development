import React from "react";
import Navbar from "../components/Navbar";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="body-content">
        <h1>
          Firstly, prior knowledge of the tools and processes involved in web
          develpment is required
        </h1>
        <h2>Tools</h2>
        <p> Here's a walk through of the tools needed.</p>
        <p>
          <b> An editor</b> which compiles the source code and displays it on
          the browser . There are a lot of <b>editors</b> used in web
          development. Some of which include Vscode, sublime text etc. We'll
          make use of Vscode which is the best (according to me lol).
        </p>
        
        <a href="https://code.visualstudio.com/download" alt="vs-code-download">
          Here's a link to download Vscode
        </a>
        <p>
          <b>A browser</b>. There are a lot of <b>browsers</b> as you might
          know. We'll make use of <b>Google Chrome</b> for this tutorial.
        </p>
        <a href="https://www.google.com/chrome/">
          Here's a link to download Google Chrome
        </a>
        <p>Once we have the steps above completed, we can get started.</p>

        <h2>Processes</h2>
        <h3>Learn Html</h3>
        <p>
          <span>
            <b>Html</b>
          </span>
          stands for
          <span>
            <b>"Hyper Text Markup Language"</b>
          </span>
          .
        </p>
        <p>
          Just like they say, a cell is the smallest unit of life, we can also
          use the persepective in terms of looking at html.
        </p>
        <p>
          <span>
            <b>Html</b>
          </span>{" "}
          is a standardized language for tagging text files to achieve font,
          colour, graphic, and hyperlink effects on a web page in a browser.
        </p>
        <p>
          Just the same way we as human beings have languages we understand, so
          also does the browser have basic languages that it understands. Html
          happens to be one of them. Others are javascript and Css(Cascading
          Style Sheet).We'll talk about them later in this tutorial.
        </p>
        <a href="https://www.w3schools.com/html/html_intro.asp">
          Here's a link to learn html in depth
        </a>
        <p>
          On the left hand side, there are detailed sub modules to help you gain
          the knowledge you require in{" "}
          <span>
            <b>html</b>
          </span>
          .
        </p>
        <img src={html} alt="html" />
        <p>
          <b>
            Please do not skip any of the sub modules. Follow them one after one
            in that order.
          </b>
        </p>

        <h3>Learn Css</h3>

        <p>
          <span>
            <b>Css</b>
          </span>
          stands for "Cascading Style sheet".
        </p>
        <p>
          <span>
            <b>Css is a styling language</b>
          </span>
          which the browser understands and it is used when adding style to
          whatever is on the browser. There are other supersets of <b>css</b>{" "}
          like scss/sass which are more complex and give more precision to
          designs but all are compiled into pure css finally because it's the
          styling language that the browser understands.
        </p>
        <a href="https://www.w3schools.com/css/css_intro.asp">
          Here's a link to learn css in depth
        </a>
        <p>
          On the left hand side, there are detailed sub modules to help you gain
          the knowledge you require in{" "}
          <span>
            <b>css</b>
          </span>
          .
        </p>
        <img src={css} alt="css" />

        <p>
          <b>
            Please do not skip any of the sub modules. Follow them one after one
            in that order.
          </b>
        </p>
        <p>
          If you studied and practiced the whole processes in both the html and
          css courses above, i'll be assuming you have been able to create your
          own little cute web pages.
        </p>
        <p>Luckily for you, the journey is not yet over. </p>
        <p>
          There's another very important language that the browser understands
          and this makes your website very effective as it's used to do a lot of
          important stuff. This very important language is called
          <b> javascript </b>. It's quite complex but important
        </p>

        <h3>Learn Javascript</h3>
        <p>
          <span>
            <b>Javascript</b>
          </span>
          is a dynamic programming language that's used for web development, in
          web applications, for game development, and lots more. It allows you
          to implement dynamic features on web pages that cannot be done with
          only HTML and CSS..
        </p>

        <a href="https://www.w3schools.com/js/js_intro.asp">
          Here's a link to learn javascript in depth
        </a>
        <p>
          On the left hand side, there are detailed sub modules to help you gain
          the knowledge you require in{" "}
          <span>
            <b>javascript</b>
          </span>
          .
        </p>
        <img src={javascript} alt="javascriptt" />
        <p>
          <b>
            Please do not skip any of the sub modules. Follow them one after one
            in that order.
          </b>
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
