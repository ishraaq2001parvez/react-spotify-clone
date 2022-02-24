import React, { useState, useEffect } from "react";
// 292928
import "./Main.css";
import List from "./List";
import data from './data';
function Main() {
	let [show, handleShow] = useState(0);
	let [dir, setDir] = useState("down");
	let [willDisplay, setWillDisplay] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			handleShow(Math.min(0.8, window.scrollY / 200));
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);
	// console.log(data)
	return (
		<main>
			<div
				style={{
					position: "fixed",
					top: "0",
					width: "100%",
					height: "60px",
					color: "white",
					zIndex: "1",
					backgroundColor: `rgba(0,0,0,${show})`,
					display: "flex",
					flexDirection: "row",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						padding: "1rem",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<button
						style={{
							borderStyle: "none",
							backgroundColor: "#000",
							color: "#ffffff",
							borderRadius: "50%",
							width: "30px",
							height: "30px",
							textAlign: "center",
							padding: "5px",
							marginLeft: "10px",
						}}
						className="not-allowed"
					>
						<i
							className="fa-solid fa-chevron-left"
							style={{ fontSize: "20px" }}
						></i>
					</button>
					<button
						style={{
							borderStyle: "none",
							backgroundColor: "#000",
							color: "#ffffff",
							borderRadius: "50%",
							width: "30px",
							height: "30px",
							textAlign: "center",
							padding: "5px",
							marginLeft: "10px",
						}}
						className="not-allowed"
					>
						<i
							className="fa-solid fa-chevron-right"
							style={{ fontSize: "20px" }}
						></i>
					</button>
					<button
						style={{
							borderStyle: "none",
							backgroundColor: "#000",
							color: "#ffffff",
							borderRadius: "15px",
							width: "8rem",
							height: "2rem",
							textAlign: "center",
							padding: "5px",
							border: "1px solid white",
							fontWeight: "900",
							opacity: "0.8",
							marginLeft: "35rem",
						}}
						className="upgrade-btn"
					>
						UPGRADE
					</button>
					<div
						style={{
							width: "9rem",
							height: "2rem",
							backgroundColor: "#000",
							borderRadius: "50px",
							marginLeft: "1.8rem",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
						className="profile-btn"
					>
						<img
							src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
							style={{
								height: "85%",
								borderRadius: "50px",
								objectFit: "contain",
								marginLeft: "2px",
							}}
						/>
						<p
							style={{
								fontSize: "12px",
								fontWeight: "bold",
								paddingLeft: "0.5rem",
							}}
						>
							Ishraaq Parvez
						</p>
						<i
							className={
								dir == "down"
									? "fa-solid fa-chevron-down  dropdown-btn"
									: "fa-solid fa-chevron-up  dropdown-btn"
							}
							style={{ fontSize: "12px", paddingLeft: "0.5rem" }}
						></i>
						<div
							style={{
								display: `${willDisplay ? "flex" : "none"}`,
								flexDirection: "column",
								position: "absolute",
								top: "3rem",
								backgroundColor: "#000",
								width: "10rem",
								borderRadius: "5px",
								padding: "0.2rem",
								left: "49.5rem",
								marginTop: "0.3rem",
								fontSize: "12px",
								fontWeight: "700",
								paddingLeft: "0.2rem",
							}}
							className="dropdown-menu"
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<div
									style={{
										width: "99%",
										backgroundColor: "#000",
										height: "2rem",
										padding: "0rem",
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
										paddingBottom: "6px",
									}}
									className="dropdown-item"
								>
									<p>
										Account
										<i
											className="fa-solid fa-arrow-up-right-from-square"
											style={{ marginLeft: "5rem" }}
										></i>
									</p>
								</div>

								<div
									style={{
										width: "99%",
										backgroundColor: "#000",
										height: "2rem",
										padding: "0rem",
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
										paddingBottom: "6px",
									}}
									className="dropdown-item"
								>
									<p>
										Account
										<i
											className="fa-solid fa-arrow-up-right-from-square"
											style={{ marginLeft: "5rem" }}
										></i>
									</p>
								</div>

								<div
									style={{
										width: "99%",
										backgroundColor: "#000",
										height: "2rem",
										padding: "0rem",
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
										paddingBottom: "6px",
									}}
									className="dropdown-item"
								>
									<p>
										Account
										<i
											className="fa-solid fa-arrow-up-right-from-square"
											style={{ marginLeft: "5rem" }}
										></i>
									</p>
								</div>

								<div
									style={{
										width: "99%",
										backgroundColor: "#000",
										height: "2rem",
										padding: "0rem",
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
										paddingBottom: "6px",
									}}
									className="dropdown-item"
								>
									<p>
										Account
										<i
											className="fa-solid fa-arrow-up-right-from-square"
											style={{ marginLeft: "5rem" }}
										></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section
				style={{
					width: "100%",
					marginTop: "70px",
				}}
			>
				<List title="Spotify Original & exclusive Shows" items={data[0]}/>
				<List title="Trending Now" items={data[1]}/>
				<List title="Fresh New Music" items={data[2]}/>
				<List title="Try Something Else" items={data[3]}/>
				<List title="Shows to try" items={data[4]}/>
				<List title="Featured Charts" items={data[5]}/>
			</section>
		</main>
	);
}
export default Main;
