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

  let winner = "";
  if (a >= b && a >= c && a >= d) winner = "Party A";
  if (b > a && b >= c && b >= d) winner = "Party B";
  if (c > a && c > b && c >= d) winner = "Party C";
  if (d > a && d > b && d > c) winner = "Party D";

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
            <th>Winner</th>
          </tr>
          <tr>
            <td>Party A</td>
            <td>{a}</td>
            <td>{winner === "Party A" ? "Yes" : ""}</td>
          </tr>
          <tr>
            <td>Party B</td>
            <td>{b}</td>
            <td>{winner === "Party B" ? "Yes" : ""}</td>
          </tr>
          <tr>
            <td>Party C</td>
            <td>{c}</td>
            <td>{winner === "Party C" ? "Yes" : ""}</td>
          </tr>
          <tr>
            <td>Party D</td>
            <td>{d}</td>
            <td>{winner === "Party D" ? "Yes" : ""}</td>
          </tr>
        </table>
      )}
    </div>
    </>
  )
}

export default App
