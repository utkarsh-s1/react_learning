import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    console.log(data)
    return (
        
        <div className='text-white bg-gray-700 rounded-md text-center m-4 text-3xl'>
            Github:{data.followers}
            <img className='text-center ' src={data.avatar_url} alt='pic' width={300}/>


        </div>
        
    )
}

export default Github
export const githubLoader = async()=>{
        const rep = await fetch("https://api.github.com/users/utkarsh2787")
        console.log(10)
        return rep.json()

}