import React from 'react'
import '../css/Serie.css'

const Serie: React.FC = () => {
    let chapters = [
        {
            name: "Chapter 1",
            date: "2021-05-01",
            time: "12:00",
            location: "Location 1",
            description: "Description 1",
        },
        {
            name: "Chapter 2",
            date: "2021-05-02",
            time: "13:00",
            location: "Location 2",
            description: "Description 2",
        },
        {
            name: "Chapter 3",
            date: "2021-05-03",
            time: "14:00",
            location: "Location 3",
            description: "Description 3",
        },
        {
            name: "Chapter 4",
            date: "2021-05-04",
            time: "15:00",
            location: "Location 4",
            description: "Description 4",
        },
    ]
    return (
        <div className='serie-container'>
            <div id='trailer_serie'>
                <h1 className='serie-title'>
                    Titulo
                </h1>
            </div>
            <div id='serieInfo_container'>
                <div id='sinopsis_container'>
                    <h2>Sinopsis:</h2>
                    <p>fnkjfnsdkjfnsdkfjnsdkjfnsdkfjnsdkjnsdkjnsdfksdnfkjsdnfkdjn</p>
                </div>
                <div id='chapter_container'>
                    {chapters.map((chapter, index) => {
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