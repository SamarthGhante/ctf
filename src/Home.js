import "./Home.css"
import robot_img from "./images/robot_thinking.jpg"

function Home() {
  return (<>
  
  <div class="text-wrapper">
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
  </div>
  
  <div class="news-container">
        <img src={robot_img} class="news-image"/>
        <h3 class="title ">Robots have gained the ability to think like Humans!!</h3>
    </div>

    <div class="text-wrapper1">
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
    <h1>BREAKING NEWS</h1>
  </div>

  </>);
}

export default Home;
