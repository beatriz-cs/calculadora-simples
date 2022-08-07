import React from "react";
import styled from "styled-components";

export const Calculator = styled.div`
  user-select: none;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  width: 50%;
  background-color: #dcdcdc;
  border: 1rem;
  border-radius: 10px;
  border: 10px outset #282c34;
  margin: 0 auto;

  input {
    width: 90%;
    height: 2.5em;
    border: none;
    background-color: gray;
    border-radius: 10px;
    font-weight: 900;
    font-size: 1em;
    text-align: center;
  }

  button {
    cursor: pointer;
    width: 50px;
    padding: 5%;
    height: auto;
    overflow: hidden;
    border: none;
    background-color: orange;
    font-weight: 900;
    font-size: 0.8em;
    border-radius: 2px;
    margin-top: 20%;
    margin-left: 3px;
  }
`;
export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 2rem;
  color: black;
  text-align: center;
`;

export default class App extends React.Component {
  state = {
    n1: "",
    n2: "",
    result: "",
    operador: ""
  };
  handleChange1 = (event) => {
    this.setState({ n1: Number(event.target.value) });
  };
  handleChange2 = (event) => {
    this.setState({ n2: Number(event.target.value) });
  };
  mult = () => {
    this.setState({ result: this.state.n1 * this.state.n2, operador: "X" });
  };
  division = () => {
    this.setState({ result: this.state.n1 / this.state.n2, operador: "/" });
  };
  sub = () => {
    this.setState({ result: this.state.n1 - this.state.n2, operador: "-" });
  };
  add = () => {
    this.setState({ result: this.state.n1 + this.state.n2, operador: "+" });
  };
  clear = () => {
    this.setState({ n1: "", n2: "", result: "", operador: "" });
  };
  render() {
    return (
      <Calculator>
        <Title>Calculator</Title>
        <input
          inputMode="numeric"
          value={this.state.n1}
          type="number"
          onChange={this.handleChange1}
        />

        <h2>{this.state.operador}</h2>

        <input
          value={this.state.n2}
          type="number"
          onChange={this.handleChange2}
        />

        <button onClick={this.mult}>*</button>
        <button onClick={this.division}>/</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.add}>+</button>
        <button onClick={this.clear}>C</button>
        <h1>{this.state.result}</h1>
      </Calculator>
    );
  }
}
