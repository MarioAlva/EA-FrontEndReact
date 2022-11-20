import React from 'react'
import '../css/Home.css'

const Home: React.FC = () => {
	let series : any[] = [];
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
        <div className="home-container">
			<div className="home-header">

			</div>
			<div className="home-titles">Series</div>
			<div id="carrousel" style={{display: "inline-flex", height: "210px"}}>
				<div onClick={() => backCarrousel()} className="home-arrowCarrousel">
					<svg style={{transform: "scaleX(-1)"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
					</svg>

				</div>
				<div className="home-carrousel">
					{series.map((serie : any, serieIndex : any) => {
						return(
							<div id={'serie_' + serieIndex} className="home-eachSerie">

							</div>
						)
					})}
				</div>
				<div onClick={() => nextCarrousel()} className="home-arrowCarrousel">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
					</svg>
				</div>
			</div>
		</div>
    )
}
export default Home