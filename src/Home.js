import "./Home.css"
import robot_img from "./images/robot_thinking.jpg"

function Home() {

  
  return (<>
  
  <div class="news-container">
        <img src={robot_img} class="news-image"/>
        <h3 class="title ">Robots have gained the ability to think like Humans!!</h3>
    </div>
  </>);
}

export default Home;
