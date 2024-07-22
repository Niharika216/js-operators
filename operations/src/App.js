import logo from "./logo.svg";
import "./App.css";

function App() {
  let a = 30;
  let b = 10;
  let c = 5;
  return (
    <div className="App">
      <h1>Arithmetic Operators</h1>
      <button
        onClick={() => {
          let c = a + b;
          console.log(c);
        }}
      >
        Addition
      </button>
      <button
        onClick={() => {
          let c = a - b;
          console.log(c);
        }}
      >
        Subtraction
      </button>
      <button
        onClick={() => {
          let c = a / b;
          console.log(c);
        }}
      >
        Division
      </button>
      <button
        onClick={() => {
          let c = a * b;
          console.log(c);
        }}
      >
        Multiplication
      </button>
      <hr></hr>
      <h1>Operator Precedence</h1>
      <button
        onClick={() => {
          console.log(a == b);
          console.log(a >= b);
          console.log(a <= b);
          console.log(a != b);
          console.log(a > b);
          console.log(a < b);
        }}
      >
        Operators
      </button>
      <hr></hr>
      <h1>Assignment Operators</h1>
      <button
        onClick={() => {
          c = 10;
          console.log(c);
        }}
      >
        Assigning
      </button>
      <button
        onClick={() => {
          c += 2;
          console.log(c);
        }}
      >
        Addition
      </button>
      <button
        onClick={() => {
          c -= 2;
          console.log(c);
        }}
      >
        Subtraction
      </button>
      <button
        onClick={() => {
          c /= 2;
          console.log(c);
        }}
      >
        Division
      </button>
      <button
        onClick={() => {
          c *= 2;
          console.log(c);
        }}
      >
        Multiplication
      </button>
      <hr></hr>
      <h1>Conditional Statements</h1>
      <button
        onClick={() => {
          if (a > b) {
            console.log("a is greather than b");
          } else {
            console.log("b is greather than a");
          }
        }}
      >
        Greatest of 2{" "}
      </button>
    </div>
  );
}

export default App;
