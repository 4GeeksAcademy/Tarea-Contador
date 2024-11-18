import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({digito1, digito2, digito3, digito4, digito5, digito6}) => {
	return (
		<div className="container bg-dark text-white rounded py-3 d-flex justify-content-center align-items-center">
			
			<div className= "digit clock-icon p-3 text-center border border-2 border-light rounded mx-1">
			<h1> <i class=" fa-regular fa-clock"></i> </h1>
			</div>
			
			<div className= "digit clock-icon p-3 text-center border border-2 border-light rounded mx-1"> 
			<h1>{digito1}</h1>
			</div>

            <div className= "digit clock-icon p-3 text-center border border-2 border-light rounded mx-1">
			<h1>{digito2}</h1>
			</div>

			<div className= "digit clock-icon p-3 text-center border border-2 border-light rounded mx-1">
			<h1>{digito3}</h1>
			</div>

			<div className= "digit clock-icon p-3 text-center border border-2 border-light rounded mx-1">
			<h1>{digito4}</h1>
			</div>

			<div className= "digit clock-icon p-3 text-center border border-2 border-light rounded mx-1">
			<h1>{digito5}</h1>
			</div>

			<div className= "digit clock-icon p-3 text-center border border-2 border-light rounded mx-1">
			<h1>{digito6}</h1>
			</div>

			
		</div>
	);
};

export default Home;
