import React from 'react'
import Link from 'next/link'

export default function () {
    return (
        <div>
            <nav className='fixed border-b-2 bg-white top-0 left-0 px-16 w-full lg:mx-0 shadow z-99'>
                <div className='flex justify-between items-center font-Ubuntu text-black'>
                    {/* Brand */}
                    <Link href="/">
                        <div className='flex justify-evenly items-center'>
                            <img src='/logo.svg' className='w-1/3' />
                            <p className='text-lg font-bold font-Garamond'>RA RAIHAN <br />PERSIS 27</p>
                        </div>
                    </Link>
                    <ul className='hidden md:flex justify-between'>
                        <Link href="/">
                            <li className='py-4 px-6'>Beranda</li>
                        </Link>
                        <Link href="/profil">
                            <li className='py-4 px-6'>Profil</li>
                        </Link>
                        <Link href="/kurikulum">
                            <li className='py-4 px-6'>Kurikulum</li>
                        </Link>
                        <Link href="/kegiatan">
                            <li className='py-4 px-6'>Kegiatan</li>
                        </Link>
                        <Link href="/kontak">
                            <li className='py-4 px-6'>Kontak</li>
                        </Link>
                    </ul>

                    <button className='block md:hidden -mr-7 rounded-lg focus:outline-none hover:bg-gray-200 group relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <div className='absolute mt-2 right-0 opacity-0 w-48 bg-white border rounded-md shadow-md transform scale-95 group-focus:scale-100 group-focus:opacity-100 transition-all duration-300 z-50'>
                            <ul className='flex flex-col'>
                                <Link href="/"><li className='py-2 px-4 hover:bg-gray-100'>Beranda</li></Link>
                                <Link href="/profil"><li className='py-2 px-4 hover:bg-gray-100'>Profil</li></Link>
                                <Link href="/kurikulum"><li className='py-2 px-4 hover:bg-gray-100'>Kurikulum</li></Link>
                                <Link href="/kegiatan"><li className='py-2 px-4 hover:bg-gray-100'>Kegiatan</li></Link>
                                <Link href="/kontak"><li className='py-2 px-4 hover:bg-gray-100'>Kontak</li></Link>
                            </ul>
                        </div>
                    </button>
                </div>
            </nav>

        </div>
    )
}
