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
    // let info = [
    //     {
    //         name: "Event 1",
    //         date: "2021-05-01",
    //         time: "12:00",
    //         location: "Location 1",
    //         description: "Description 1",
    //         tags: ["Action"],
    //         image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    //     },
    //     {
    //         name: "Event 2",
    //         date: "2021-05-02",
    //         time: "13:00",
    //         location: "Location 2",
    //         description: "Description 2",
    //         tags: ["Romance"],
    //         image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    //     },
    //     {
    //         name: "Event 3",
    //         date: "2021-05-03",
    //         time: "14:00",
    //         location: "Location 3",
    //         description: "Description 3",
    //         tags: ["Romance", "Comedy"],
    //         image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    //     },
    //     {
    //         name: "Event 4",
    //         date: "2021-05-04",
    //         time: "15:00",
    //         location: "Location 4",
    //         description: "Description 4",
    //         tags: ["Terror", "Drama", "Romance"],
    //         image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    //     },
    //     {
    //         name: "Event 5",
    //         date: "2021-05-05",
    //         time: "16:00",
    //         location: "Location 5",
    //         description: "Description 5",
    //         tags: ["Action", "Comedy"],
    //         image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    //     },
    //     {
    //         name: "Event 6",
    //         date: "2021-05-06",
    //         time: "17:00",
    //         location: "Location 6",
    //         description: "Description 6",
    //         tags: ["Drama", "Comedy", "Terror"],
    //         image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    //     },
    // ]

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
                            <img src="" alt="series" />
                            <div className='series-info'>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search