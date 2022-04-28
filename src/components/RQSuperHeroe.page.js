import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroeData } from '../hooks/useSuperHeroData'

function RQSuperHeroepage() {
  const {heroId} = useParams()
  const {data , isLoading , error , isError }= useSuperHeroeData(heroId)
  if(isError)return<div>{error.message}</div>
  if(isLoading)return<div>Loading ...</div>
  return (<>
    <div>{data.data.id}</div>
    <div>{data.data.name}</div>
    <div>{data.data.alteEgo}</div>
  </>
  )
}

export default RQSuperHeroepage