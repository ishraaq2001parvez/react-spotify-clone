import React from "react";
import "./List.css";
import Song from "./Song";
function List({ title, items }) {
	return (
		<section
			style={{
				width: "98%",
				height: "19rem",
				// background: "red",
				margin: "1rem",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					padding: "1rem",
				}}
			>
				<h1
					style={{
						// background: "blue",
						flexGrow: "8",
						fontSize: "20px",
						fontWeight: "900",
					}}
					className="text"
				>
					{title}
				</h1>
				<p
					style={{
						// background: "yellow",
						fontSize: "12px",
						fontWeight: "900",
						textTransform: "uppercase",
					}}
					className="text"
				>
					See All
				</p>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					padding: "1rem",
					paddingTop: "0.2rem",
					paddingRight:"0rem",
					// background: "red",
				}}
			>
				{items.map((element, index) => {
					return (
						<Song
							song={element}
							index={index}
							marginRight={index === items.length-1}
							key={index}
						/>
					);
				})}
			</div>
		</section>
	);
}
export default List;
