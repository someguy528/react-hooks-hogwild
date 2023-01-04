import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";
import HogFilter from "./HogFilter";


function App() {

	const [isGreased, setShowGreased] = useState(true);
	const [sortBy, setSortBy] = useState("name");

	const allHogsShown = hogs.filter((hog) => (isGreased? hog.greased : true)).sort((hog1,hog2) => {
		if(sortBy==="weight"){
			return hog1.weight - hog2.weight;
		} else {
			return hog1.name.localeCompare(hog2.name)
		}
	})

	return (
		<div className="App">
			<Nav />
			<HogFilter onChangeShowGreased={setShowGreased} isGreased={isGreased} sortBy={sortBy} onChangeSortBy={setSortBy}/>
			<HogList hogs={allHogsShown}/>
		</div>
	);
}

export default App;
