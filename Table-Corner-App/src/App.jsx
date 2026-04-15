import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setSelectedItem } from "./redux/features/showSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  //Single correct destructuring
  const { items, loading, selectedItem } = useSelector(
    (state) => state.show
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      {/* Table */}
      {!selectedItem && (
  loading ? (
    <h2>Loading...</h2>
  ) : (
    <table border="1" style={{ margin: "0 auto" }}>
      <thead>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td>
              <button
                onClick={() => dispatch(setSelectedItem(item))}
              >
                Show
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
)}

      {/* 4 Corners Display */}
      {selectedItem && (
  <>
    <div className="corner-box top-left">
      <strong>UserId:</strong> {selectedItem.userId}
    </div>

    <div className="corner-box top-right">
      <strong>ID:</strong> {selectedItem.id}
    </div>

    <div className="corner-box bottom-left">
      <strong>Body:</strong> {selectedItem.body}
    </div>

    <div className="corner-box bottom-right">
      <strong>Title:</strong> {selectedItem.title}
    </div>

    <button
      className="back-btn"
      onClick={() => dispatch(setSelectedItem(null))}
    >
      Back
    </button>
  </>
)}
    </div>
  );
}

export default App;