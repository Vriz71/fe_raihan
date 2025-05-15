import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import { supabase } from '../../../lib/supabaseClient' 

const  {data,error }= await supabase.from('kegiatan') .select()
if(error){
    alert('err')
}
    const kegiatan = data;


function Kegiatan() {
    return (
        <div>
            <Navbar />
            {/* <section className="px-24 py-32 text-black font-Ubuntu">
                <p className="text-main text-3xl font-bold text-center my-8">
                    Kegiatan Seru dan Bermakna
                </p>

                <div className="grid grid-cols-4 gap-10">
                    {kegiatan.map((item, index) => {

                        return (
                            <div key={item.id || index}>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_API_URL}${item.gambar?.url}`}
                                    // alt={item.cover?.alternativeText}
                                    style={{ width: '100%', maxWidth: '600px' }}
                                />
                                <h1 className='text-lg font-semibold'>{item.judul}</h1>
                                <p>{item.deskripsi[0]?.children[0]?.text}</p>
                            </div>
                        );
                    })}

                </div>

            </section> */}
            <section className="px-6 md:px-12 lg:px-24 py-16 text-black font-Ubuntu">
                <p className="text-main text-2xl md:text-3xl font-bold text-center my-8">
                    Kegiatan Seru dan Bermakna
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {kegiatan.map((item, index) => (
                        <div key={item.id || index} className="flex flex-col gap-3">
                            <img
                                src={`${item.gambar_url}`}
                                alt={item.judul}
                                className="w-full max-w-sm mx-auto object-cover rounded-lg"
                            />
                            <h1 className="text-lg font-semibold">{item.judul}</h1>
                            <p>{item.deskripsi  }</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />

            <ScrollTop />
        </div>
    )
}

export default Kegiatan