import { useState } from 'react'
import './App.css'

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const [show, setShow] = useState(false);
  const [showAvg, setShowAvg] = useState(false);

  const total = a + b + c + d;
  const avg = total / 4;

  let result = "";
  if (a >= b && a >= c && a >= d) result = "Party A";
  if (b > a && b >= c && b >= d) result = "Party B";
  if (c > a && c > b && c >= d) result = "Party C";
  if (d > a && d > b && d > c) result = "Party D";

  return (
    <>
      <div style={{ textAlign: "center" }}>
      <h2>Total Votes: {a + b + c + d}</h2>

      <button onClick={() => setShowAvg(!showAvg)}>
        Show Average
      </button>

      {showAvg && <h3>Average Votes: {avg}</h3>}

      <br /><br />

      <button onClick={() => setA(a + 1)}>Party A</button>
      <button onClick={() => setB(b + 1)}>Party B</button>
      <button onClick={() => setC(c + 1)}>Party C</button>
      <button onClick={() => setD(d + 1)}>Party D</button>

      <br /><br />

      <button onClick={() => setShow(true)}>Voting Complete</button>

      {show && (
        <table border="1" style={{ margin: "20px auto" }}>
          <tr>
            <th>Party</th>
            <th>Votes</th>
            <th>Result</th>
          </tr>
          <tr>
            <td>Party A</td>
            <td>{a}</td>
            <td>{result === "Party A" ? "Won" : ""}</td>
          </tr>
          <tr>
            <td>Party B</td>
            <td>{b}</td>
            <td>{result === "Party B" ? "Won" : ""}</td>
          </tr>
          <tr>
            <td>Party C</td>
            <td>{c}</td>
            <td>{result === "Party C" ? "Won" : ""}</td>
          </tr>
          <tr>
            <td>Party D</td>
            <td>{d}</td>
            <td>{result === "Party D" ? "Won" : ""}</td>
          </tr>
        </table>
      )}
    </div>
    </>
  )
}

export default App
