import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";
function Menu() {
	return (
		<div className="main">
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
			/>
			<div className="headder">
				<h3>Set</h3>
			</div>
			<div className="container">
				<Link className="box" to="/network">
					<span className="material-symbols-outlined">wifi</span>
					<p>Network</p>
				</Link>
				<Link className="box" to="/time">
					<span className="material-symbols-outlined">manage_history</span>
					<p>Time</p>
				</Link>
				<Link className="box" to="/common">
					<span className="material-symbols-outlined">widgets</span>
					<p>Common</p>
				</Link>
				<Link className="box" to="/product">
					<span className="material-symbols-outlined">contact_support</span>
					<p>Product</p>
				</Link>
			</div>
		</div>
	);
}

export default Menu;
