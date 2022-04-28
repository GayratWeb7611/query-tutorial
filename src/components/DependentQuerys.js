import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchUser =({queryKey})=>{
    return axios.get(`http://localhost:4000/users/${queryKey[1]}`)
}

const fetchChannel = ({queryKey})=>{
    return axios.get(`http://localhost:4000/channels/${queryKey[1]}`)
}
export default function DependentQuerys({email}) {

    const {data} = useQuery(['user' , email], fetchUser)
    const channelId = data?.data.channelId
    const {data: channel} = useQuery(['channel',channelId],fetchChannel,{
        enabled: !!channelId
    })
  return (
    <div>DependentQuerys</div>
  )
}
