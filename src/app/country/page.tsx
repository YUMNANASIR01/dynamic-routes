import Link from "next/link"
function Country() {
    return (
      <>
        <h1>I &nbsp;AM &nbsp;COUNTRY &nbsp;PAGE</h1>
        <ul >
         
        <li><Link className="mylink" href={"/country_details/Pakistan"}>&nbsp;Pakistan&nbsp; </Link></li><br /> 
        <li><Link className="mylink" href={"/country_details/India"}>&nbsp;India&nbsp;</Link></li><br />
        <li><Link className="mylink" href={"/country_details/Iran"}>&nbsp;Iran&nbsp;</Link></li><br /> 
        <li ><Link className="mylink" href={"/country_details/Turkey"}>&nbsp;Turkey&nbsp;</Link></li><br /> 
        <li ><Link className="mylink" href={"/country_details/SaudiArabia"}>SaudiArabia</Link></li><br />
        </ul> 
      </>
    )
  }
  export default Country       