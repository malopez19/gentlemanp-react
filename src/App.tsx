import { useState } from "react";
import "./App.css";
import Button, { ColorRed } from "./components/Button/Button";
import Customform from "./components/CustomForm/Customform";
import { GlobalProvider } from "./context/global.provider";
import { BookReader } from "./components/useRef/BookReader";
import { Modal } from "./components/Modal/Modal";
import { useModalContext } from "./components/Modal/context/useModalContext";

function App() {
	const [count, setCount] = useState(0);
	const { setState} = useModalContext();

	const handleclick = () => {
		console.log("Button clicked");
		setCount(count + 1);
	};

	const openModal = () => {
		setState(true);
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

			<br></br>
			<br></br>
			<BookReader />

			<br></br>
			<br></br>
			<Modal>
				<div>
					<h1>Modal</h1>
					<p>Modal content</p>
				</div>
			</Modal>
			<button onClick={openModal}>Click me</button>
		</GlobalProvider>
	);
}

export default App;
