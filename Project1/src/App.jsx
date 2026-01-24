import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    age: "",
    college: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(form);
    setForm({
      firstname: "",
      lastname: "",
      age: "",
      college: "",
    });
  };

  return (
    <>
      <div className="form-container">
        <label>First name:</label>
        <input
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
        />

        <label>Last name:</label>
        <input
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />

        <label>College:</label>
        <select
          name="college"
          value={form.college}
          onChange={handleChange}
        >
          <option value="">Select College</option>
          <option value="ABC">Valia College</option>
          <option value="XYZ">MVM College</option>
          <option value="XYZ">Bhavans College</option>
          <option value="XYZ">Rutumbara College</option>
          <option value="XYZ">Mithibai College</option>
          <option value="XYZ">NMIMS College</option>
          <option value="XYZ">Hansraj Morarji College</option>
        </select>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default App
