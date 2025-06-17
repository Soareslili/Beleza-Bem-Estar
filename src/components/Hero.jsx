import { useEffect, useState } from 'react'
import Bghero from '../assets/Bg-hero.avif'

export function Hero() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Bghero})` }}
        >
            <div
                className="absolute inset-0 z-0"
                style={{ backgroundColor: 'rgba(0,0,0,0.40)' }}
            ></div>
  <header
    className={`fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-center transition-colors duration-300
        ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}
    `}
>
    <div className="flex w-full max-w-6xl items-center justify-between px-4 mx-auto">
        <a className=" text-rose-500 font-bold text-3xl font-playfair md:block" href="#">Beleza & Bem-Estar</a>
        <button
            className="md:hidden text-4xl text-rose-600"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
        >
            &#9776;
        </button>
        <nav className={`
            ${menuOpen ? 'flex bg-white' : 'hidden'}
            flex flex-col items-center space-y-6 text-xl font-roboto font-semibold py-10 px-6 shadow-md absolute top-16 left-0 w-full
            md:flex md:static md:flex-row md:space-y-0 md:gap-8 md:w-auto md:py-0 md:px-0 md:shadow-none md:bg-transparent
        `}>
            <a className="text-gray-400 hover:text-pink-300 transition-colors duration-200" href="#hero">Início</a>
            <a className="text-gray-400 hover:text-pink-300 transition-colors duration-200" href="#about">Sobre</a>
            <a className="text-gray-400 hover:text-pink-300 transition-colors duration-200" href="#treatment">Tratamentos</a>
            <a className="text-gray-400 hover:text-pink-300 transition-colors duration-200" href="#testimony">Depoimentos</a>
            <a className="text-gray-400 hover:text-pink-300 transition-colors duration-200" href="#contact">Contato</a>
            <a className="bg-rose-600 text-white py-2 px-5 rounded-full gap-2 hover:bg-pink-700 transition-colors duration-200" href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20a%20clínica&type=phone_number&app_absent=0">Agendar</a>
        </nav>
    </div>
</header>


            <main className="relative z-10 flex flex-col items-center justify-center text-white text-center h-[calc(100vh-4rem)] px-4">
                <div data-aos="fade-up" data-aos-delay='0'>
                    <h1 id='hero' className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4">Desperte sua</h1>
                    <h2 className="text-2xl sm:text-3xl text-pink-400 md:text-6xl font-semibold">beleza natural</h2>
                    <p className='text-base sm:text-lg mt-10 max-w-2xl mx-auto'>
                        Seu momento de cuidado começa aqui. Descubra tratamentos exclusivos que realçam sua beleza e promovem seu bem-estar.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row mt-8 gap-4 w-full sm:w-auto justify-center items-center">
                    <a  className="bg-rose-600 text-white font-semibold text-base py-4 px-8 rounded-full hover:bg-pink-700 transition-colors duration-300 w-full sm:w-auto text-center" data-aos="fade-up" data-aos-delay='300' href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20a%20clínica&type=phone_number&app_absent=0">
                        Agende agora pelo WhatsApp
                    </a>
                    <a
                        className="bg-transparent text-white border border-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto text-center"
                        data-aos="fade-up"
                        data-aos-delay='600'
                        href="#treatment"
                    >
                        Conheça nossos tratamentos
                    </a>
                </div>
            </main>

        </div>
    )
}
