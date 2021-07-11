import React, { useState, useEffect } from 'react'

const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Patna");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3b107dc0f3498cb460c509dbc0af7e49`
            const response = await fetch(url)
            const resInJson = await response.json();
            console.log(resInJson)
            setCity(resInJson.main)
        }

        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputdata">
                    <input type="search"
                        className="inputfield"
                        value={search}
                        onChange={(event) => { setSearch(event.target.value) }}
                    /> Type Your city name to see the report and make sure your spelling should be correct
                </div>
                {!city ? (<p>No Data Found</p>) :
                    (<><div className="information">
                        <h2 className="location">
                            <i className="fas fa-street-view"></i>{search}
                        </h2>
                        <h1 className="temp1">
                            {city.temp}°Cel
                        </h1>
                        <h3 className="tempmax">min:{city.temp_min} °cel | max:{city.temp_max} °cel</h3>
                       <b><p>Humidity :{city.humidity}</p></b> 
                    </div>
                    </>)

                }
            </div>

        </>
    )
}

export default Weather
