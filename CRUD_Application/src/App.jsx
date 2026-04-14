import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "./redux/features/inputSlice";
import "./App.css"; 

function App() {
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.input.items);

  const handleAdd = () => {
  if (inputValue.trim() === "") return;

  if (editIndex !== null) {
    const updatedItems = [...items];
    updatedItems[editIndex] = inputValue;
    dispatch({ type: "input/setItems", payload: updatedItems });
    setEditIndex(null);
  } else {
    dispatch(addItem(inputValue));
  }

  setInputValue("");
};

  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };

  return (
  <div className="container">

    <div className="input-section">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something"
      />
      <button onClick={handleAdd}>Add</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Value</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item}</td>
            <td>
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button onClick={() => {
                setInputValue(item);
                setEditIndex(index);
              }}>
                Change
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