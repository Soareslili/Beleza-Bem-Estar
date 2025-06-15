



export function Location() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4 items-center">Nossa Localização</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Venha nos visitar! Estamos em uma localização privilegiada e de fácil acesso.</p>
            </div>


            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-gray-200 flex items-center justify-center ml-10 rounded-2xl"
                data-aos="zoom-in-right"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0682352417007!2d-46.506549824890904!3d-23.56599267879664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce676edd286c5f%3A0x4b56801d4922f046!2sShopping%20Aricanduva!5e0!3m2!1spt-BR!2sbr!4v1749987460465!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização no Google Maps"
                        className="rounded-xl shadow-lg"
                    />

                </div>

                <div className="flex flex-col bg-white w-full max-w-lg mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-6">Como chegar</h3>


                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center"></div>
                            <div className="flex flex-col">
                                <h5 className="font-semibold text-gray-800">Endereço</h5>
                                <p className="text-gray-600">
                                    Rua das Flores, 123 - Centro <br />
                                    São Paulo, SP - CEP:01234-567
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center"></div>
                            <div className="flex flex-col">
                                <h5 className="font-semibold text-gray-800">Horário de Funcionamento</h5>
                                <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                                <p className="text-gray-600">Sábado: 9h às 16h</p>
                                <p className="text-gray-600">Domingos Fechados</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center"></div>
                            <div className="flex flex-col">
                                <h5 className="font-semibold text-gray-800">Telefone</h5>
                                <p className="text-gray-600">(11) 99999-9999</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-rose-600 to-rose-700 rounded-2xl text-white">
                        <h4 className="font-playfair font-bold text-xl mb-3">Transporte e Estacionamento</h4>
                        <li className="mb-4 opacity-90">
                            Várias linha de ônibus na região
                        </li>

                        <li className="mb-4 opacity-90">
                            Estacionamento gratuito
                        </li>

                        <li className="mb-4 opacity-90">
                            Acesso falicitado para PCD
                        </li>
                    </div>
                </div>

            </div>

        </section>
    )
}