import { useState , useEffect} from 'react'
import './App.css';
import GithubNavBar from './componet/NavBAr.jsx'
import GithubProfile from './componet/profileCard.jsx'

function App() {
  const [userNumber , setUser] = useState(10);
  const [profile , setProfile] = useState([]);


  const countUser =  async() => {
        let ren = Math.floor(Math.random()*1000)

        try{
            const respons = await fetch(`https://api.github.com/users?since=${ren}&per_page=${userNumber}`);
            const data = await respons.json();
            console.log(data)
            setProfile(data)
        }
        catch(error){
            console.log(error)
        };  
    }
    useEffect(()=>{
        countUser()
    },[])


  return (
  <div className="mainfile">
    <GithubNavBar 
      usreInput={setUser}
      currentInput={userNumber}
      updateData={countUser} />

    <div className="profile">
      {Array.isArray(profile)&&profile.map((value) => (
        <GithubProfile
          key={value.id}
          value={value}
        />
      ))}
    </div>
  </div>
);
}

export default App
