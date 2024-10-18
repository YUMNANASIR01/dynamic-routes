import CountryDetails from '@/components/CountryComp'
import React from 'react'

function DynamicPage({params}: {params: {id : string}}) {
  return (
    <div className='myid1'>
      < CountryDetails  Country_details= {params.id}/>
    </div>
  )
}
export default DynamicPage
