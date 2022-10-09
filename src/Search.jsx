import { useState } from "react";

// const steamAPI = "https://store.steampowered.com/api/storesearch/";
//?term=god%20of%20war&cc=BR";
export default function Search() {
    const [search, setSearch] = useState("");
    return (<div>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button type="button" onClick={async () => {
            const response = await fetch('http://store.steampowered.com/api/storesearch/?term=god%20of%20war&cc=BR', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            console.log(response);
        }}>Search</button>
    </div >)
}