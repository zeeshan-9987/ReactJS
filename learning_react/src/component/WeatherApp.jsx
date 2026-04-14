import { useEffect, useState } from "react";
import '../App.css'

const WeatherApp = () => {

    const [city, setCity] = useState("Mumbai");
    const [weather, setWeather] = useState(null);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [failed, setFailed] = useState("")

    
    const urls = {
    Mumbai: "https://api.openweathermap.org/data/2.5/weather?lat=19.0760&lon=72.8777&appid=a41df3c1820af2bba9c23c001d0217de",

    Delhi: "https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&appid=a41df3c1820af2bba9c23c001d0217de",

    Manipur: "https://api.openweathermap.org/data/2.5/weather?lat=24.6637&lon=93.9063&appid=a41df3c1820af2bba9c23c001d0217de",

    Rajasthan: "https://api.openweathermap.org/data/2.5/weather?lat=27.0238&lon=74.2179&appid=a41df3c1820af2bba9c23c001d0217de",

    Chandigarh: "https://api.openweathermap.org/data/2.5/weather?lat=30.7333&lon=76.7794&appid=a41df3c1820af2bba9c23c001d0217de",
  };

  useEffect(() => {
    async function getWeatherDetails() {
      const res = await fetch(urls[city]);
      const data = await res.json();
      setWeather(data);
      console.log(weather)
    }

    getWeatherDetails();
  }, [city]);

  useEffect(() => {
        // async function getUserData() {
        //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
        //     const data1 = await res.json();
        //     // console.log(data1);
        //     setUser(data1);
        //     // console.log(user)
        // }

        //Promise Chaining
         function getUserData() {
            setLoading(true)
            try {
                fetch("https://jsonplaceholder.typicode.com/users").then(res => {
                    if (!res.ok) {
                      throw new Error("Error")
                    }
                    else{
                        return res.json() 
                      };
    }).then(res=> setUser(res)).catch(err=>setFailed(err.message))
            } catch (error) {
                setFailed(error)
            }
            finally{
            setTimeout(()=>{
                setLoading(false)
            },2000)
            }
        }

        getUserData();
    }, [])


  return (
    <>
      <div>
      <select onChange={(e) => setCity(e.target.value)}>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Manipur</option>
        <option>Rajasthan</option>
        <option>Chandigarh</option>
      </select>

      {weather && (
        <div>
          <p>Longitude: {weather.coord.lon}</p>
          <p>Latitude: {weather.coord.lat}</p>
          <p>Weather: {weather.weather[0].main}</p>
        </div>
      )}

      <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>

    {/* //Conditional rendering */}
      <tbody>
        {loading && 
        <tr key={"loading"}><td><span>Loading...</span></td></tr>}
         {!loading && failed
        && <tr key="failed"><td><span>{failed}</span></td></tr>}
        {!loading && user && user.map((u) => (
          <tr key={u.id}>
            <td className={u.id>5 ? 'red' : ''}>{u.id}</td>
            <td className={u.id>5 ? 'red' : ''}>{u.name} {u.id > 5 ? <span className="red">Premium member</span> : <span className="green">Non Premium member</span>}</td>
            <td className={u.id>5 ? 'red' : ''}>{u.email}</td>
            <td className={u.id>5 ? 'red' : ''}>{u.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
    
  )
}

export default WeatherApp