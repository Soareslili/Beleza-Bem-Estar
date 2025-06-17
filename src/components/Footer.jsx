

export function Footer() {
    return (
        <section className="container mx-auto px-4 py-16 bg-black">
            <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    <div className=" flex flex-col">
                        <h3 className="text-2xl font-playfair font-bold text-rose-400 mb-4">Beleza & Bem-Estar</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">Seu refúgio de beleza e bem-estar. Cuidando de você com carinho e profissionalismo há mais de 10 anos.</p>
                    </div>
                    <div className="flex space-x-4">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rose-600 cursor-pointer transform hover:scale-110 hover:translate-z-0">
                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rose-600 cursor-pointer transform hover:scale-110 hover:translate-z-0">
                            <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.002 3.657 9.127 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.261c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.127 22 17.002 22 12z" />
                        </svg>


                        <a href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20a%20clínica&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rose-600 cursor-pointer transform hover:scale-110 hover:translate-z-0">
                                <path d="M12.04 2C6.51 2 2 6.29 2 11.62c0 2.1.73 4.04 1.97 5.6L2 22l5.02-1.64c1.46.4 2.9.6 4.37.6 5.53 0 10.04-4.29 10.04-9.62S17.57 2 12.04 2zm0 17.5c-1.27 0-2.51-.17-3.67-.5l-.26-.08-2.97.96.98-2.89-.19-.28c-1.14-1.48-1.73-3.2-1.73-5 0-4.43 3.75-8.02 8.34-8.02 4.6 0 8.34 3.59 8.34 8.02s-3.74 8.02-8.34 8.02zm4.38-5.92c-.24-.12-1.4-.69-1.62-.76-.22-.08-.39-.12-.56.12-.17.24-.65.76-.8.92-.15.16-.29.18-.53.06-.24-.12-1.01-.37-1.93-1.17-.71-.63-1.19-1.4-1.32-1.64-.14-.24-.01-.37.11-.49.12-.12.24-.27.36-.4.12-.13.16-.23.24-.37.08-.13.04-.28-.02-.4-.06-.12-.56-1.36-.77-1.88-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.44.06-.67.28-.23.22-.88.85-.88 2.06s.9 2.39 1.02 2.56c.12.16 1.78 2.71 4.31 3.8.6.26 1.06.41 1.42.52.6.19 1.15.16 1.58.1.48-.07 1.4-.57 1.6-1.13.2-.56.2-1.04.14-1.13-.06-.09-.22-.15-.46-.27z" />
                            </svg>
                        </a>
                    </div>

                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidas</h4>
                    <a className="text-white">Início</a>
                    <a className="text-white">Sobre</a>
                    <a className="text-white">Tratamentos</a>
                    <a className="text-white">Depoimentos</a>
                    <a className="text-white">Contato</a>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold mb-4 text-white">Tratamentos</h4>
                    <ul>
                        <li className="text-white">Limpeza de Pele</li>
                        <li className="text-white">Spa dos Pés</li>
                        <li className="text-white">Drenagem Linfática</li>
                        <li className="text-white">Massagem Relaxante</li>
                        <li className="text-white">Massagem Modeladora</li>
                        <li className="text-white">Revitalização Facial</li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>

                    <li className="text-gray-300 mb-2 list-none">(11) 99999-9999</li>

                    <div className="flex flex-col">
                        <li className="text-gray-300 list-none">Rua das Flores, 123 - Centro</li>
                        <li className="text-gray-300 list-none mb-4">
                            São Paulo, SP -CEP: 01234-567
                        </li>
                    </div>

                </div>

            </div>

            <div className="border-t border-t-gray-300 mt-10 text-center">
                <p className="text-white py-4">© 2024 Beleza & Bem-Estar. Todos os direitos reservados.</p>
            </div>

        </section>
    )
}