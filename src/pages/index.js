import Image from 'next/image'
import { Inter,Poppins } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { How, Why } from '@/components/Sections'
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'] , weight: '200' })


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${poppins.className}`}
    >
      <Navbar />
      <Hero />
      <How />
      <Why />
      Welcome to Hawks
    </main>
  )
}
