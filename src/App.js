// Styled-styledComponents
import Styled from "styled-components";
// React
import { Component } from "react";

class App extends Component {
  render() {
    // Start Styles
    const Container = Styled.div`
    border: 5px solid black;
    width: 300px;
    height: 300px;
    padding: 5px 10px;
    margin: 20px auto;
    position: relative;
  `;
    const Circles = Styled.div`
    &:first-child,
    &:last-child{
        display: inline-block;
        background-color: yellow;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 20px;
    }
    &:first-child span,
    &:last-child span{
      position: absolute;
      bottom: 10px;
      width: 80px;
      height: 26px;
      text-align: center;
      background-color: red;
      color: white;
      cursor: pointer;
      line-height: 1.5;
      border-radius: 6px;
      user-select: none;
    }
  `;
    // End Styles

    // The Content
    return (
      <Container>
        <Circles>
          <span data-status="on">on</span>
        </Circles>
        <Circles>
          <span data-status="on">on</span>
        </Circles>
      </Container>
    );
  }
}

// Light Effect
document.onclick = (e) => {
  // Check If The dataset Value Equal To On Or Not
  if (e.target.dataset.status == "on") {
    // Make It OFF
    e.target.dataset.status = "off";
    // Make The Circle Background Color Black
    e.target.parentElement.style.backgroundColor = "black";
    // Make The Button Text Equal To The Data Set Value (OFF)
    e.target.innerHTML = e.target.dataset.status;
    // To Cahnge The Light Background Color
    e.target.style.backgroundColor = "lightgray";
    // To Cahnge The Light Color
    e.target.style.color = "black";
  } else {
    // Make It ON
    e.target.dataset.status = "on";
    // Make The Circle Background Color Yellow
    e.target.parentElement.style.backgroundColor = "yellow";
    // Make The Button Text Equal To The Data Set Value (ON)
    e.target.innerHTML = e.target.dataset.status;
    // To Cahnge The Light Background Color
    e.target.style.backgroundColor = "red";
    // To Cahnge The Light Color
    e.target.style.color = "white";
  }
};
export default App;
