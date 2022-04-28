import axios from 'axios'
import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
const fetchColor = ()=>{
    return axios.get(`http://localhost:4000/superheroes`)
}
const post = (hero)=>{
    return axios.post(`http://localhost:4000/superheroes`,hero)
}
export default function Paginated() {
    const {data , isFetching } = useQuery('paginated', fetchColor)
    const [name , setName]=useState('')
    const [alterEgo , setAlterEgo]=useState('')
    const { mutate: addHero } = useMutation(post)
    const handleOk = ()=>{
        const hero =  {alterEgo , name}
        addHero(hero)
    }
    return (
    <>
        <>
            <input type='name' value={name} onChange ={(e)=>setName(e.target.value)}  placeholder='Name' />
            <input type='alterEgo' value={alterEgo} onChange ={(e)=>setAlterEgo(e.target.value)} placeholder='alterEgo' />
            <button type='submit' onClick={handleOk} >Add hero</button>
        </>
        {data?.data.map((item)=>(<h1 key={item.id} >{item?.name}</h1>))}
        
        <div>{isFetching&&'loading...'}</div>
    </>
  )
}
