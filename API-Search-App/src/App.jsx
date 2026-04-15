import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/features/dataSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Filter logic
  const filteredData = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <div className="container">

    {/* Search */}
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {/* Table */}
    {loading ? (
      <h2 className="loading">Loading...</h2>
    ) : (
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}

  </div>
);
}

export default App;