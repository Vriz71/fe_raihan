import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

function Profil() {
  return (
    <div>
      <Navbar />

      {/* First */}
      <section className="px-4 md:px-16 lg:px-24 py-16 text-black font-Ubuntu" id="about">
        <p className="text-main text-2xl md:text-3xl font-bold text-center my-8">Tentang Kami</p>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-28 items-center">
          {/* Teks */}
          <div className="w-full lg:w-3/5">
            <span className="font-bold text-main">RA Raihan Persis 27 </span>
            merupakan lembaga pendidikan anak usia dini yang fokus pada perkembangan anak. Seluruh program pendidikan telah disusun sedemikian rupa untuk disesuaikan dengan kebutuhan anak.
            <br /><br />
            Program pendidikan RA Raihan Persis 27 menggunakan metode yang sejalan dengan tahapan perkembangan anak dengan memberikan ragam pilihan permainan dan media pendidikan yang dapat digunakan oleh anak, dan dirancang untuk membantu anak agar dapat mencapai tingkat perkembangan yang optimal dengan dilandasi oleh nilai-nilai Islam.
          </div>

          {/* Gambar */}
          <div className="w-full lg:w-1/3">
            <img
              src="/about.png"
              alt="Anak-anak RA Raihan"
              className="w-full h-auto shadow-4xl rounded-t-4xl object-cover"
            />
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="flex flex-col md:flex-row justify-between gap-10 py-10 text-center">
          <div className="w-full md:w-1/2">
            <p className="text-main text-2xl md:text-3xl font-bold">Visi</p>
            <p className="my-5">
              "mengembangkan kompetensi dasar anak didik <br />
              menjadi khalifah di muka bumi" <br />
              (Bab II, Pasal 2; Pedoman Sistem Pendidikan Persatuan Islam).
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-main text-2xl md:text-3xl font-bold">Misi</p>
            <p className="my-5">
              1. Membentuk insan Ulul Albab selaku muslim kaffah dengan Tafaquh fiddien <br />
              (Bab II, Pasal 3, Pedoman Sistem Persatuan Islam). <br />
              2. Menjadi lembaga pendidikan alternatif yang profesional dan memiliki manfaat bagi lingkungan sekitar
            </p>
          </div>
        </div>
      </section>

      {/* Second */}
      {/* <section className='px-24 py-20 font-Ubuntu bg-second'>
        <p className="text-main text-3xl font-bold text-center">Kelompok Usia</p>
        
        <div className='flex justify-center my-12'>
          <div className='grid grid-cols-2 w-3xl gap-10 text-center'>
            <div className='bg-main text-white rounded-lg px-3 py-5'>
              Kelompok Baby <br /> 3 Bulan - 1 Tahun
            </div>
            <div className='bg-main text-white rounded-lg px-3 py-5'>
              Kelompok Toddler <br /> 1 - 3 Tahun
            </div>
            <div className='bg-main text-white rounded-lg px-3 py-5'>
              Kelompok A <br /> 4 - 5 Tahun
            </div>
            <div className='bg-main text-white rounded-lg px-3 py-5'>
              Kelompok B <br /> 5 - 6 Tahun
            </div>
          </div>
        </div>

        
        <div className='flex justify-center text-white'>
          <div className="flex gap-10">
            <div className="w-1/2">
              <div className="flex items-center justify-between rounded-t-4xl p-6 bg-third">
                <p>Hari efektif belajar</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 mr-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>
              </div>
              <div className="bg-main p-6 text-center rounded-b-4xl">
                Pelaksanaan KBM <br />
                SENIN - JUMAT <br />
                Hari Libur <br />
                SABTU - AHAD
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex items-center justify-between rounded-t-4xl p-7 bg-third">
                <p>Waktu belajar</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div className="bg-main p-6 text-center rounded-b-4xl">
                Toddler <br />
                07.30 - 13.00 WIB <br />
                Kelompok A dan B <br />
                07.30 - 13.30 WIB
              </div>
            </div>
          </div>

        </div>
      </section> */}

      <section className="px-6 md:px-24 py-20 font-Ubuntu bg-second">
        <p className="text-main text-2xl md:text-3xl font-bold text-center">Kelompok Usia</p>

        {/* Kelompok usia cards */}
        <div className="flex justify-center my-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 text-center max-w-4xl w-full">
            <div className="bg-main text-white rounded-lg px-3 py-5">
              Kelompok Baby <br /> 3 Bulan - 1 Tahun
            </div>
            <div className="bg-main text-white rounded-lg px-3 py-5">
              Kelompok Toddler <br /> 1 - 3 Tahun
            </div>
            <div className="bg-main text-white rounded-lg px-3 py-5">
              Kelompok A <br /> 4 - 5 Tahun
            </div>
            <div className="bg-main text-white rounded-lg px-3 py-5">
              Kelompok B <br /> 5 - 6 Tahun
            </div>
          </div>
        </div>

        {/* Info Hari dan Waktu */}
        <div className="flex justify-center text-white">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-10 w-full max-w-5xl px-4">

            {/* Hari efektif belajar */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center justify-between rounded-t-3xl p-6 bg-third">
                <p>Hari efektif belajar</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5" />
                </svg>
              </div>
              <div className="bg-main p-6 text-center rounded-b-3xl">
                Pelaksanaan KBM <br />
                SENIN - JUMAT <br />
                Hari Libur <br />
                SABTU - AHAD
              </div>
            </div>

            {/* Waktu belajar */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center justify-between rounded-t-3xl p-6 bg-third">
                <p>Waktu belajar</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div className="bg-main p-6 text-center rounded-b-3xl">
                Toddler <br />
                07.30 - 13.00 WIB <br />
                Kelompok A dan B <br />
                07.30 - 13.30 WIB
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Third */}
      {/* <section className='px-24 py-20 font-Ubuntu'>
        <p className="text-main text-3xl font-bold text-center">Tenaga Pengajar</p>
        <p className='text-main text-xl font-semibold text-center my-10'>
          Terdiri dari tenaga Pendidik dan Kependidikan yang berpengalaman, bersifat Murabbi (pendidik/pengasuh), berijazah S1.
        </p>
        <img src='/guru2.jpg' alt='Guru' className='mx-auto' />
      </section> */}
      <section className="px-6 md:px-24 py-20 font-Ubuntu">
        <p className="text-main text-2xl md:text-3xl font-bold text-center">Tenaga Pengajar</p>

        <p className="text-main text-base md:text-xl font-semibold text-center my-8 md:my-10 max-w-4xl mx-auto">
          Terdiri dari tenaga Pendidik dan Kependidikan yang berpengalaman, bersifat Murabbi (pendidik/pengasuh), berijazah S1.
        </p>

        <img
          src="/guru2.jpg"
          alt="Guru"
          className="mx-auto w-full max-w-5xl h-auto rounded-lg shadow-md"
        />
      </section>


      <Footer />

      <ScrollTop />
    </div>
  )
}

export default Profil