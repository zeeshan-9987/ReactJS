import { useState } from 'react'
import './App.css'
import Button from './component/Button'
import Counter from './component/Counter'
import Square from './component/square/Square'
import New from './component/square/New'
import New1 from './component/square/New1'
import WeatherApp from './component/WeatherApp'

function App() {

 let [color, setColor] = useState("red")

 function colourChange(){
  setColor("burlywood")
 }

 function colourChange1(){
  setColor("aqua")
 }

 //Object ka Usestate
 function changeFormData(){
  setUserForm((prev) => ({
  ...prev,
   age: 30,
 
}));
}

 const [userForm,setUserForm] = useState({
  'name': 'Zeeshan',
  'age' : 20,
  'College' : 'Valia College'
 })

 //Array ka Usestate
 function changeFruits(e){
  setFruits((prev) => ([
  ...prev,
   'jhagv' 
  ]))
  console.log(e.target)
}

 const [fruits,setFruits] = useState(['apple','mango','grapes','litchi','dragonfruit','kiwi'])

 //Input Field Checking
 const [textForm, setTextForm] = useState("")

 //Single Input Form
 const [Hheyy, setHheyy] = useState("");
 function handleSubmit(e){
  // console.log(e)
  e.preventDefault()
  console.log(Hheyy)
 }

 //Multiple Input Form
 function handleSubmit1(e){
  e.preventDefault()
  console.log(formData)
 }

 const [formData, setFormData] = useState({
  'name': '',
  'age' : ''
 })

 function handleChange(e){
  setFormData({...formData,[e.target.name]:e.target.value})
 }

  return (
    <>
      <Counter />
      <New userForm = {userForm}/>
      <New1 fruits = {fruits}/>
      <Square color = {color}/>
      <button onClick={colourChange}>Click ME!</button>
      <button onClick={colourChange1}>Previous Colour!</button>

      <button onClick={changeFormData}></button>
      <button onClick={changeFruits}></button>
      
      {/* //Input Field Checking */}
      <input type="text" name="text1" id="text2" value={textForm} onChange={e=> setTextForm(e.target.value)}/>

      {/* //Single Input Field */}
      <form onSubmit={handleSubmit}>
        <input type="text" name='hhey' value={Hheyy} onChange={e=> setHheyy(e.target.value)}/>
        <button type="submit" value="submit">Submit</button>
      </form>

      {/* //Multiple Input Field */}
      <form onSubmit={handleSubmit1}>
        <input type="text" name='name' value={formData.name} onChange={handleChange}/>
        <input type="text" name='age' value={formData.age} onChange={handleChange}/>
        <button type="submit" value="submit">Submit</button>
      </form>

      <WeatherApp/>
    </>
  )
}

export default App
