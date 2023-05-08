import React from 'react'
import Layout from '../components/Layout'
import Link from "next/link";

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark  dark:text-light dark:border-light font-medium text-lg ' >
      <Layout className='py-8 flex items-center justify-between ' >
        <span>{new Date().getFullYear()}</span>
        <div className='flex items-center' >
       Build with <span className='text-primary text-2xl px-1 ' >&#9825;</span> by &nbsp;  <Link href="/" >CodeBucks</Link>
        </div>
            <Link href="/">Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer