import React from "react";
import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";
function App() {
	return (
		<div className="app">
			<div style={{ width: "100%", height: "100vh", display: "flex" }}>
				<div
					style={{
						width: "20%",
						backgroundColor: "#000",
						position: "fixed",
						top: "0",
						left: "0",
						height: "100vh",
					}}
				>
					<Sidebar />
				</div>
				<div
					style={{
						width: "100%",
						backgroundColor: "#292928",
						height:"130rem",
						marginLeft: "20%",
						// zIndex:"1"
					}}
				>
					<Main />
				</div>
				<BottomBar />
			</div>
		</div>
	);
}

export default App;
