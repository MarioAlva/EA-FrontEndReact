import React, { useEffect, useState } from 'react'
import '../css/Serie.css'
import * as serieService from '../services/SerieServices'
import { useParams } from 'react-router-dom'
import Ser from '../models/Serie'

const Serie: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [serie, setSerie] = useState<Ser>();
	const load = async () => {
		const serie = await serieService.getSerie(id as string);
		setSerie(serie.data);
  	};

	useEffect(() => {
		load();
	});
    return (
        <div className='serie-container'>
            <div id='trailer_serie'>
                <h1 className='serie-title'>
                    {serie?.title}
                </h1>
            </div>
            <div id='serieInfo_container'>
                <div id='sinopsis_container'>
                    <h2>Sinopsis:</h2>
                    <p>{serie?.overview}</p>
                </div>
                <div id='chapter_container'>
                    {serie?.episodes.map((chapter, index) => {
                        return (
                            <div className='chapter'>
                                <div className='chapter-title'>
                                    {index + 1}. {chapter.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Serie