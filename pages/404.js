import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
       setTimeout(()=>{
        // router.go(-1)
        router.push('/')
       },3000)
       
    },[])
  return (
    <div className='not-found'>
        <h1>....Oooppp</h1>
        <h2>That Page cannot be found</h2>
        <p>Go back to the <Link href='/'>Homepage</Link> </p>
    </div>
  )
}

export default NotFound