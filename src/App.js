import React, { useEffect, useState } from "react";
import { CardList } from "./Components/Card-list/Card-list";
import './App.css'
export default function App() {
  const [cat, setCatName] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => setCatName(user));
  });
const fillterName=cat.filter(value =>
     value.name.toLowerCase().includes(search.toLowerCase())
)
  return (
    <>
      <div className="App">
        <div className="input">
          <h2>Cat Name Filter</h2>
<input
          type="search"
          name=""
          id=""
          placeholder="Search 
        Cats Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        </div>
        
        {
        cat&& <CardList Name={fillterName}></CardList>

        }
      </div>
    </>
  );
}
