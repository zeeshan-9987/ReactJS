import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleStatus } from "./redux/features/todoSlice";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
  <div className="container">

    <div className="input-section">
      <input
        type="text"
        value={inputValue}
        maxLength={20}
        onChange={(e) => {
          const value = e.target.value;
          if (/^[A-Za-z\s]*$/.test(value)) {
            setInputValue(value);
          }
        }}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Submit</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>ToDo</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.text}</td>
            <td>
              <button
                className="status-btn"
                onClick={() => dispatch(toggleStatus(item.id))}
              >
                {item.status}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>
);
}

export default App;