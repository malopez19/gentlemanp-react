import { useState } from "react";
import "./App.css";
import Button, { ColorRed } from "./components/Button/Button";
import Customform from "./components/CustomForm/Customform";
import { GlobalProvider } from "./context/global.provider";

function App() {
	const [count, setCount] = useState(0);

	const handleclick = () => {
		console.log("Button clicked");
		setCount(count + 1);
	};

	return (
		<GlobalProvider>
			<ColorRed>
				<Button parentMethod={handleclick}>mi boton rojo</Button>
			</ColorRed>
			<Button parentMethod={handleclick}> Mi boton normal</Button>

			<br></br>
			<br></br>
			<Customform />
		</GlobalProvider>
	);
}

export default App;
