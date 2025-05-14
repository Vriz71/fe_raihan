import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

function Kontak() {
    return (
        <div>
            <Navbar />
            <section className="px-6 md:px-12 lg:px-24 lg:py-32 py-16 text-white font-Ubuntu bg-main">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

                    {/* Kontak Info */}
                    <div className="w-full lg:w-1/2 py-8">
                        <p className="text-2xl md:text-3xl font-semibold">Kontak Kami</p>
                        <div className="mt-10 grid gap-8">
                            <div className="font-semibold flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 flex-shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                </svg>
                                <div>
                                    <p className="text-xl leading-8" id="alamat">Alamat</p>
                                    <p className="font-thin text-sm">Jl. Cempakawarna No.99, Cilembang, Kec. Cihideung, Kab. Tasikmalaya, Jawa Barat 46123</p>
                                </div>
                            </div>

                            <div className="font-semibold flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 flex-shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <div>
                                    <p className="text-xl leading-8">Telepon</p>
                                    <p className="font-thin text-sm">081378951308</p>
                                </div>
                            </div>

                            <div className="font-semibold flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 flex-shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <div>
                                    <p className="text-xl leading-8" id="email">Email</p>
                                    <p className="font-thin text-sm">ra.raihanpersis27@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tombol Hubungi Kami */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                        <a href="https:/wa.me/6281378951308" className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium px-8 py-4 rounded-full transition text-center w-full max-w-sm">
                            Hubungi Kami
                        </a>
                    </div>

                </div>
            </section>

            <Footer />

            <ScrollTop />
        </div>
    )
}

export default Kontak