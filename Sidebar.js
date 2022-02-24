import React from "react";
import "./Sidebar.css";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
function Sidebar() {
	return (
		<section
			style={{
				backgoundColor: "#000",
				display: "flex",
				flexDirection: "column",
				padding: "1rem",
				color: "white",
			}}
		>
			<div
				style={{
					width: "100%",
					color: "red",
					display: "flex",
					flexDirection: "row",
				}}
			>
				<img
					src="https://i.pinimg.com/originals/f0/5c/bc/f05cbc8c0f8b075d2b4f1f68fee49649.jpg"
					style={{
						objectFit: "contain",
						width: "55px",
						paddingTop: "0.2rem",
					}}
					alt=""
				/>
				<h1 style={{ paddingTop: "0.5rem", color: "white" }}>
					Spotify
				</h1>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					padding: "2rem",
					fontSize: "13px",
					paddingLeft: "0rem",
					fontWeight: "bold",
					// cursor:"pointer",
				}}
			>
				<div
					style={{
						paddingBottom: "0.5rem",
						display: "flex",
						flexDirection: "row",
					}}
					className="sideBarElement"
				>
					<i
						className="fa fa-house"
						style={{
							backgoundColor: "white",
							color: "white",
							fontSize: "20px",
							display: "inline",
							paddingRight: "0.5rem",

						}}
					></i>
					<p className="" style={{marginTop:"5px", paddingLeft:"0.5rem"}}>Home</p>
				</div>
				
				<div
					style={{
						paddingBottom: "0.5rem",
						display: "flex",
						flexDirection: "row",
					}}
					className="sideBarElement"
				>
					<i
						className="fa fa-solid fa-magnifying-glass"
						style={{
							backgoundColor: "white",
							color: "white",
							fontSize: "20px",
							display: "inline",
							paddingRight: "0.5rem",

						}}
					></i>
					<p className="" style={{marginTop:"5px", paddingLeft:"0.5rem"}}>Search</p>
				</div>
				<div
					style={{
						paddingBottom: "0.5rem",
						display: "flex",
						flexDirection: "row",
					}}
					className="sideBarElement"
				>

					<i
						className="fa-solid fa-bars"
						style={{
							backgoundColor: "white",
							color: "white",
							fontSize: "20px",
							display: "inline",
							paddingRight: "0.5rem",

						}}
					></i>
					<p className="" style={{marginTop:"5px", paddingLeft:"0.5rem"}}>Your Library</p>
				</div>

				<div
					style={{
						paddingBottom: "0.5rem",
						display: "flex",
						flexDirection: "row",
						paddingTop:"2rem"
					}}
					className="sideBarElement"
				>
					<i
						className="fa fa-folder-plus"
						style={{
							backgoundColor: "white",
							color: "white",
							fontSize: "20px",
							display: "inline",
							paddingRight: "0.5rem",

						}}
					></i>
					<p className="" style={{marginTop:"5px", paddingLeft:"0.5rem"}}>Create Playlist</p>
				</div>

				<div
					style={{
						paddingBottom: "0.5rem",
						display: "flex",
						flexDirection: "row",
					}}
					className="sideBarElement"
				>
					<i
						className="fa fa-heart"
						style={{
							backgoundColor: "white",
							color: "white",
							fontSize: "20px",
							display: "inline",
							paddingRight: "0.5rem",

						}}
					></i>
					<p className="" style={{marginTop:"5px", paddingLeft:"0.5rem"}}>Liked Songs</p>
				</div>
				<hr
					style={{
						height: "0.1px",
						border: "0px",
						backgroundColor: "white",
						width: "120%",
						marginLeft: "-10px",
						marginTop:"12px",
						opacity: "0.2",

					}}
				/>

				<div
					style={{
						paddingBottom: "0.5rem",
						paddingTop:"9rem",
						display: "flex",
						flexDirection: "row",
					}}
					className="sideBarElement"
				>
					<i
						className="fa fa-download"
						style={{
							backgoundColor: "white",
							color: "white",
							fontSize: "20px",
							display: "inline",
							paddingRight: "0.5rem",

						}}
					></i>
					<p className="" style={{marginTop:"5px", paddingLeft:"0.5rem"}}>Install Web App</p>
				</div>

			</div>
		</section>
	);
}
export default Sidebar;
