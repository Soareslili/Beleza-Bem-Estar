import { useState } from 'react'
import Bghero from '../assets/Bg-hero.avif'

export function Hero() {
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <div
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Bghero})` }}
        >
            <div
                className="absolute inset-0 z-0"
                style={{ backgroundColor: 'rgba(0,0,0,0.40)' }}
            ></div>
            <header className="relative z-10 flex h-16 w-full items-center justify-between">
                <a className="text-rose-500 font-bold text-3xl font-playfair ml-10" href="#">Beleza & Bem-Estar</a>
        <button
                        className="md:hidden text-4xl text-rose-600"
                        aria-label="Abrir menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        &#9776;
                    </button>
                <nav className={`${menuOpen ? 'flex' : 'hidden'} flex flex-col items-center space-y-6 text-xl font-roboto font-semibold py-10 px-6 shadow-md mr-20 absolute top-16 left-0 w-full
                    md:flex md:static md:flex-row md:items-center md:space-y-0 md:gap-8 md:w-auto md:py-0 md:px-0 md:shadow-none md:bg-transparent`}>
                    <a className="text-gray-400 hover:text-pink-300 transition-colors duration-200" href="">Início</a>
                    <a className="text-gray-400 hover:text-pink-300 transition-colors duration-200" href="">Sobre</a>
                    <a className="text-gray-400 hover:text-pink-300 transition-colors duration-200" href="">Tratamentos</a>
                    <a className="text-gray-400 hover:text-pink-300 transition-colors duration-200" href="">Depoimentos</a>
                    <a className="text-gray-400 hover:text-pink-300 transition-colors duration-200" href="">Contato</a>
                    <a className="bg-rose-600 text-white py-2 px-5 rounded-full gap-2 hover:bg-pink-700 transition-colors duration-200" href="">Agendar</a>
                </nav>
            </header>

            <main className="relative z-10 flex flex-col items-center justify-center text-white text-center h-[calc(100vh-4rem)] px-4">
                <div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">Desperte sua</h1>
                    <h2 className="text-3xl text-pink-400 md:text-6xl font-semibold">beleza natural</h2>
                    <p className='text-lg mt-10'>Seu momento de cuidado começa aqui. Descubra tratamentos exclusivos que realçam sua beleza e promovem seu bem-estar.</p>
                </div>
                <div className="flex mt-8 gap-4">
                    <a className="bg-rose-600 text-white font-semibol text-ls py-4 px-8 rounded-full hover:bg-pink-700 transition-colors duration-300" href="">Agende agora pleo Whatssap</a>
                    <a
                        className="bg-transparent text-white border border-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                        href=""
                    >
                        Conheça nossos tratamentos
                    </a>
                </div>
            </main>
        </div>
    )
}
