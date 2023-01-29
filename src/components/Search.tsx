import React, { useState, useEffect } from 'react'
import '../css/Search.css'
import Filter from '../assets/img/filter.png'
import filterOptions from '../assets/data/filterOptions'
import Serie from '../models/Serie'
import * as serieService from '../services/SerieServices'
import { useNavigate } from 'react-router-dom'

const Search: React.FC = () => {
	const navigate = useNavigate();
    let [search, setSearch] = React.useState('');
    let [filter, setFilter] = React.useState(false);
    let [filterList, setFilterList] = React.useState<string[]>([]);
	const [info, setSeries] = useState<Serie[]>([]);

	const loadSeries = async () => {
		const series = await serieService.getAllSeries();
		setSeries(series.data);
  	};

	useEffect(() => {
		loadSeries();
	}, []);

    let filteredInfo = info.filter((event) => {
        if (filterList.includes("All")) {
            return event
        } else if (filterList.length === 0) {
            return event.title.toLowerCase().includes(search.toLowerCase())
        } else {
            return event.title.toLowerCase().includes(search.toLowerCase()) && filterList.every((tag) => event.genres.includes(tag))
        }
    })

	const clickSerie = (index: number) => {
		navigate(`/serie/${info[index]._id}`);
	};

    return (
        <div className='search-container'>
            <div style={{display: "flex", justifyContent: "center"}}>
                <input onChange={(e) => setSearch(e.target.value)} placeholder='Search...' type="text" />
            </div>
            <div className='filter-container'>
                <div className='filter' onClick={() => setFilter(!filter)}>
                    <img src={Filter} height="25" alt="filter" />
                    <p style={{marginLeft: "5px", fontSize: "20px"}}>Filter</p>
                </div>
                <div className='filter-modal' style={filter ? {display: "block"} : {display: "none"}}>
                    {filterOptions.map((option, index) => {
                        return (
                            <div style={filterList.includes(option.label) && (!filterList.includes("All") || option.label === "All") ? {border: "1px solid rgb(0 52 234)"} : {border: "1px solid rgb(163, 163, 163)"}} key={index} onClick={(e) => {
								if (!filterList.includes(option.label)) {
                                    if(filterList.includes("All")) {
                                        setFilterList(["All"])
                                    } else{
									    setFilterList([...filterList, option.label])
                                    }
								} else {
									setFilterList(filterList.filter(item => item !== option.label))
								}
							}
							}>
                                <span>{option.label}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='series-container'>
                {filteredInfo.map((item, index) => {
                    return (
                        <div onClick={() => clickSerie(index)} className='series-one' key={index}>
                            <img height="100%" src={item.poster_path + ''} alt="series" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search