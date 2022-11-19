import React from 'react'
import '../css/Event.css'

const Event: React.FC = () => {
	let Event : any[] = [];
	function backCarrousel() {
		let carrousel = document.getElementById("carrousel");
		if (carrousel) {
			carrousel.scrollLeft -= 300;
		}
	}

	function nextCarrousel() {
		let carrousel = document.getElementById("carrousel");
		if (carrousel) {
			carrousel.scrollLeft += 300;
		}
	}

	return (
        <div className="eventscreen-container">
			<div className="eventscreen-titles">Eventos</div>
			<div id="carrousel" style={{display: "inline-flex", width: "90%", height: "210px"}}>
				<div onClick={() => backCarrousel()} className="eventscreen-arrowCarrousel">
					<svg style={{transform: "scaleX(-1)"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
					</svg>

				</div>
				<div className="eventscreen-carrousel">
					{Event.map((Event : any, eventIndex : any) => {
						return (
							<div id={'event_' + eventIndex} className="eventscreen-eachEvent">
								<div className="text">{Event.title}</div>
    		            		<img src="https://ae01.alicdn.com/kf/HTB1QCxBXuP2gK0jSZFoq6yuIVXag/Carteles-de-pel-culas-Breaking-Bad-carteles-de-pel-culas-Vintage-de-EE-UU-Papel-Kraft.jpg_Q90.jpg_.webp" style={{width:"100%"}} alt="img"/>
							</div>
						)
					})}
				</div>
				<div onClick={() => nextCarrousel()} className="eventscreen-arrowCarrousel">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
					</svg>
				</div>
			</div>

		</div>
    )
}
export default Event