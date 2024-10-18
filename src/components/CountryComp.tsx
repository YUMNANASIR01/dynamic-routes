import React from 'react'
function CountryDetails(props: {Country_details : string}) {
    const data = {
        Pakistan:{
            Name: "Pakistan",
            Population: "4,343,434",
            Capital: "Islamabad" },
            India:{
                Name: "India", 
                Population:  "1,380,004,385",
                Capital: "Delhi" ,
            },
        
            Iran:{
                Name: "Iran",
                Population:" 86,000,000",
                Capital:" Tehran"
            },
        
            Turkey:{
                Name: "Turkey",
                Population:"85,000,000",
                Capital:"Ankara"
            },
        
            SaudiArabia:{
                Name: "SaudiArabia",
                Population:"36000000",
                Capital:"Riyadh"
            },        
    }
    if (props.Country_details == "Pakistan") {
        return (
            <div className='mydiv'>
            <h2><hr /><hr />  Name: {props.Country_details}</h2><hr /><hr />  
            <hr /><h2><hr /> Population: {data.Pakistan.Population}</h2><hr /> <hr /> 
            <hr /><h2><hr /> Capital: {data.Pakistan.Capital}</h2><hr /><hr />  
            </div>
          )
    }
    else if (props.Country_details == "India") {
        return (
            <div className='mydiv'>
            <h2><hr /><hr /> Name: {props.Country_details} <hr /><hr /> </h2>
            <h2><hr /><hr />  Population: {data.India.Population}<hr /><hr /> </h2>
            <h2><hr /><hr /> Capital: {data.India.Capital}<hr /><hr /> </h2>
            </div>
          )
    }
    if (props.Country_details == "Iran") {
        return (
            <div className='mydiv'>
            <h2><hr /><hr />  Name: {props.Country_details} <hr /><hr />  </h2>
            <h2><hr /><hr />  Population: {data.Iran.Population} <hr /><hr />  </h2>
            <h2> <hr /><hr />  Capital: {data.Iran.Capital}<hr /><hr />  </h2>
            </div>
          )
    }
    if (props.Country_details == "Turkey") {
        return (
            <div className='mydiv'>
            <h2><hr /><hr />  Name: {props.Country_details} <hr /><hr />  </h2>
            <h2><hr /><hr />  Population: {data.Turkey.Population}<hr /><hr />  </h2>
            <h2><hr /><hr />  Capital: {data.Turkey.Capital}<hr /><hr />  </h2>
            </div>
          )
    }
    if (props.Country_details == "SaudiArabia") {
        return (
            <div className='mydiv'>
            <h2><hr /><hr />  Name: {props.Country_details}<hr /> <hr /> </h2>
            <h2><hr /><hr />  Population: {data.SaudiArabia.Population}<hr /> <hr /> </h2>
            <h2><hr /><hr />  Capital: {data.SaudiArabia.Capital}<hr /><hr />  </h2>
            </div>
          )
    }

    else{
        <h1>This page is not found ❌</h1>
    }
}

export default CountryDetails