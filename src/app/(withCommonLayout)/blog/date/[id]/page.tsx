"use client"

import { useParams } from "next/navigation";


const YearPage = () => {
    const params = useParams()
    const id = params.id as string
    console.log(id)


  return (
    <div> year page</div>
  )
}

export default YearPage;