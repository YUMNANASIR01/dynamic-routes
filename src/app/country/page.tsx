import Link from "next/link"
function Country() {
    return (
      <>
        <h1>I &nbsp;AM &nbsp;COUNTRY &nbsp;PAGE</h1>
        <ul >
         
        <li><h1><Link className="mylink" href={"/country_details/Pakistan"}> Pakistan </Link></h1></li> 
        <hr /><li><h1><Link className="mylink" href={"/country_details/India"}>India </Link></h1></li> 
        <hr /><li> <h1><Link className="mylink" href={"/country_details/Iran"}>Iran</Link></h1></li> 
        <hr /><li ><h1><Link className="mylink" href={"/country_details/Turkey"}>Turkey</Link></h1></li> 
        <hr /> <li ><h1><Link className="mylink" href={"/country_details/SaudiArabia"}>SaudiArabia </Link></h1></li>
        </ul> 
      </>
    )
  }
  export default Country       