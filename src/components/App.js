import React, {useState} from "react";
import Nav from "./Nav";
import Menu from "./Menu";
import TileList from "./TileList"
import hogs from "../porkers_data";

function App() {
	const [filterBy, setFilterBy] = useState("All");

	const newHogs = hogs.filter(hog => {
        if (filterBy === "All") {
            return true;
        }
        else if (filterBy === false) {
            return hog.greased === filterBy;
        }
        else {
            return hog.greased === filterBy;
        }
    })

	return (
		<div className="App">
			<Nav />
			<Menu setFilterBy={setFilterBy}/>
			<TileList newHogs={newHogs}/>
		</div>
	);
}

export default App;
