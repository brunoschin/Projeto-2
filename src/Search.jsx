import { useState } from "react";
import Thumb from "./Thumb";

const cheapSharkAPI = "https://www.cheapshark.com/api/1.0/";

export default function Search(props) {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const searchHandler = async () => {
        const response = await fetch(`${cheapSharkAPI}games?title=${search}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        setResults(data);
    }

    return <>
        <div className="searchContainer">
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={() => {
                if (window.event.keyCode === 13) {
                    searchHandler();
                }
            }} placeholder="Buscar por jogos" />
            <button type="button" onClick={searchHandler}>BUSCAR</button>
        </div >
        <div className="resultsContainer">
            <p>Resultados</p>
            <div className="results">
                {results.length > 0 ? results.map((result, index) => {
                    return (
                        <Thumb key={index} {...result} />
                    )
                }) : <></>}
            </div>
        </div>
    </>
}