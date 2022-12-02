import React from 'react'
import '../css/Search.css'
import Filter from '../assets/img/filter.png'
import filterOptions from '../assets/data/filterOptions'

const Search: React.FC = () => {
    let [search, setSearch] = React.useState('');
    let [filter, setFilter] = React.useState(false);
    let [filterList, setFilterList] = React.useState<string[]>([]);
    let info = [
        {
            name: "Event 1",
            date: "2021-05-01",
            time: "12:00",
            location: "Location 1",
            description: "Description 1",
            image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            name: "Event 2",
            date: "2021-05-02",
            time: "13:00",
            location: "Location 2",
            description: "Description 2",
            image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            name: "Event 3",
            date: "2021-05-03",
            time: "14:00",
            location: "Location 3",
            description: "Description 3",
            image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            name: "Event 4",
            date: "2021-05-04",
            time: "15:00",
            location: "Location 4",
            description: "Description 4",
            image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            name: "Event 5",
            date: "2021-05-05",
            time: "16:00",
            location: "Location 5",
            description: "Description 5",
            image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            name: "Event 6",
            date: "2021-05-06",
            time: "17:00",
            location: "Location 6",
            description: "Description 6",
            image: "https://images.unsplash.com/photo-1617229632539-8b8b5b2b2f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
    ]

    let consoled = () => {
        console.log(search)
    }

    return (
        <div className='search-container'>
            <div style={{display: "flex", justifyContent: "center"}}>
                <input onChange={(e) => setSearch(e.target.value)} onClick={consoled} placeholder='Search...' type="text" />
            </div>
            <div className='filter-container'>
                <div className='filter' onClick={() => setFilter(!filter)}>
                    <img src={Filter} height="25" alt="filter" />
                    <p style={{marginLeft: "5px", fontSize: "20px"}}>Filter</p>
                </div>
                <div className='filter-modal' style={filter ? {display: "block"} : {display: "none"}}>
                    {filterOptions.map((option, index) => {
                        return (
                            <div key={index} onClick={(e) => {
								// if (e.target.checked) {
								// 	setFilterList([...filterList, option.label])
								// } else {
								// 	setFilterList(filterList.filter(item => item !== option.label))
								// }
								console.log(e)
							}
							}>
                                <span>{option.label}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='series-container'>
                {info.map((item, index) => {
                    return (
                        <div className='series-one' style={item.name.includes(search) ? {} : {display: "none"}} key={index}>
                            <img src={item.image} alt="series" />
                            <div className='series-info'>
                                <h3>{item.name}</h3>
                                <p>{item.date}</p>
                                <p>{item.time}</p>
                                <p>{item.location}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search