import Image from 'next/image'
import { Inter,Poppins } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Contact, Footer, How, Learn, Subscribe, Why } from '@/components/Sections'
import { Divider } from '@/components/Divider'
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
      <Learn />
      <Subscribe />
      <Divider />
      <Footer />
    </main>
  )
}
