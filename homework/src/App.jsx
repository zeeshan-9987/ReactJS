import { useState } from 'react'
import './App.css'

function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [college, setCollege] = useState("");
  // const [marks, setMarks] = useState("");
  // const [subject, setSubject] = useState("");
  // const [gender, setGender] = useState("");
  // const [hobbies, setHobbies] = useState([]);

  const [form, setForm] = useState({
    name: "",
    age: "",
    college: "",
    marks: "",
    subject: "",
    gender: "",
    hobbies: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((h) => h !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    console.log(form);
    setForm({
      name: "",
      age: "",
      college: "",
      marks: "",
      subject: "",
      gender: "",
      hobbies: [],
    });
  };

  return (
    // <div className='form-container'>
    //   <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>

    //   <input type="number" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)}/>

    //   <select value={college} onChange={(e) => setCollege(e.target.value)}>
    //     <option value="">Select College</option>
    //     <option value="ABC">Valia College</option>
    //     <option value="XYZ">MVM College</option>
    //     <option value="XYZ">Bhavans College</option>
    //     <option value="XYZ">Rutumbara College</option>
    //     <option value="XYZ">Mithibai College</option>
    //     <option value="XYZ">NMIMS College</option>
    //     <option value="XYZ">Hansraj Morarji College</option>
    //   </select>

    //   <input type="number" placeholder="Enter marks" value={marks} onChange={(e) => setMarks(e.target.value)}/>
      
    //   <select value={subject} onChange={(e) => setSubject(e.target.value)}>
    //     <option value="">Select Subject</option>
    //     <option value="English">English</option>
    //     <option value="Hindi">Hindi</option>
    //     <option value="Marathi">Marathi</option>
    //     <option value="Math">Math</option>
    //     <option value="Science">Science</option>
    //     <option value="History">History</option>
    //     <option value="Geography">Geography</option>
    //   </select>

    //   <input type="radio" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)}/> Male
    //   <input type="radio" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)}/> Female

    //   <input type="checkbox" value="Reading"onChange={(e) =>e.target.checked
    //   ? setHobbies([...hobbies, e.target.value])
    //   : setHobbies(hobbies.filter(h => h !== e.target.value))
    //   }/> Reading
    //   <input type="checkbox" value="Sports" onChange={(e) =>e.target.checked
    //   ? setHobbies([...hobbies, e.target.value])
    //   : setHobbies(hobbies.filter(h => h !== e.target.value))
    //   }/> Sports

    //   {/* <button onClick={() => console.log(name, age, college, marks, subject, gender, hobbies)}>
    //     Submit
    //   </button> */}

    //   <button onClick={() => {
    //     console.log(name, age, college, marks, subject, gender, hobbies);
    //     // Reset all fields
    //     setName("");
    //     setAge("");
    //     setCollege("");
    //     setMarks("");
    //     setSubject("");
    //     setGender("");
    //     setHobbies([]);
    //   }}>Submit</button>

    // </div>

    <div className="form-container">
      <label>First name:</label>
      <input name="name" value={form.name} onChange={handleChange} />

      <label>Age:</label>
      <input type="number" name="age" value={form.age} onChange={handleChange} />

      <label>College:</label>
      <select name="college" value={form.college} onChange={handleChange}>
        <option value="">Select College</option>
        <option value="ABC">Valia College</option>
        <option value="XYZ">MVM College</option>
        <option value="XYZ">Bhavans College</option>
        <option value="XYZ">Rutumbara College</option>
        <option value="XYZ">Mithibai College</option>
        <option value="XYZ">NMIMS College</option>
        <option value="XYZ">Hansraj Morarji College</option>
      </select>

      <label>Marks:</label>
      <input type="number" name="marks" value={form.marks} onChange={handleChange} />

      <label>Subject:</label>
      <select name="subject" value={form.subject} onChange={handleChange}>
        <option value="">Select Subject</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Marathi">Marathi</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
        <option value="Geography">Geography</option>
      </select>

      <label>Gender:</label>
      <ul>
        <li>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={form.gender === "Male"}
            onChange={handleChange}
          />Male
          {" "}
        </li>
        <li>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={form.gender === "Female"}
            onChange={handleChange}
          />Female
          {" "}
        </li>
      </ul>

      <label>Hobbies:</label>
      <ul>
        <li>
          <input
            type="checkbox"
            name="hobbies"
            value="Reading"
            checked={form.hobbies.includes("Reading")}
            onChange={handleChange}
          />{" "}
          Reading
        </li>
        <li>
          <input
            type="checkbox"
            name="hobbies"
            value="Sports"
            checked={form.hobbies.includes("Sports")}
            onChange={handleChange}
          />{" "}
          Sports
        </li>
      </ul>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
