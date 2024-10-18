import Link from "next/link"

function Navbar() {
  return (
    <div>
        <ul> 
          <li><Link className="myid" href={"/about"}>ABOUT</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li><Link  className ="myid" href={"/contact"}>CONTACT</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li><Link  className ="myid" href={"/update"}>UPDATE</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li><Link  className="myid" href={"/country"}>COUNTRY</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
      </ul> 
    </div>
  )
}

export default Navbar
