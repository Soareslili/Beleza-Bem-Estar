export function Contact() {
    return (
        <section className="py-20 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">Entre em Contato</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Tire suas dúvidas ou agende um horário! Estamos aqui para cuidar de você.
                </p>
            </div>
            <div>
                <div className="grid gap-12 lg:grid-cols-2 px-4 max-w-5xl mx-auto">
                 
                     <div className=" h-[500px] bg-gradient-to-br from-rose-50 to-rose-100 p-8 rounded-2xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-6">Informações de Contato</h3>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center"></div>
                                <div className="flex flex-col">
                                    <h5 className="font-semibold text-gray-800">Telefone</h5>
                                    <p className="text-gray-600">(11) 99999-9999</p>
                                </div>
                            </div>
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
                        </div>
                        <a
                            href=""
                            className="mt-6 block bg-rose-600 text-white py-4 px-6 rounded-xl hover:bg-rose-700 transition-all duration-300 shadow-lg text-center transform hover:scale-105 hover:translate-z-0"
                            style={{ willChange: 'transform' }}
                        >
                            Conversar no WhatsApp
                        </a>
                    </div>
                    {/* Perguntas Frequentes */}
                    <div className="flex flex-col bg-white w-full max-w-lg mx-auto">
                        <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-6">Perguntas Frequentes</h3>
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors mb-4">
                            <h4 className="font-semibold text-gray-800 mb-3">Como posso agendar um horário?</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Você pode agendar através de nosso WhatsApp clicando no botão 'Agendar' ou nos ligando diretamente.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors mb-4">
                            <h4 className="font-semibold text-gray-800 mb-3">Preciso de algum preparo antes dos tratamentos?</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Dependendo do tratamento, pode haver orientações específicas. Nossa equipe te informará sobre todos os detalhes no agendamento.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors mb-4">
                            <h4 className="font-semibold text-gray-800 mb-3">Vocês trabalham com que horários?</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Funcionamento de segunda a sexta das 9h às 18h, sábados das 9h às 16h. Domingos fechados.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors mb-4">
                            <h4 className="font-semibold text-gray-800 mb-3">Os tratamentos são seguros?</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Sim! Todos os nossos tratamentos são realizados por profissionais qualificados e utilizamos produtos de alta qualidade.
                            </p>
                        </div>
                        <div className="mt-8 p-6 bg-gradient-to-r from-rose-600 to-rose-700 rounded-2xl text-white">
                            <h4 className="font-playfair font-bold text-xl mb-3">Primeira vez?</h4>
                            <p className="mb-4 opacity-90">
                                Ganhe 15% de desconto no seu primeiro tratamento! Entre em contato e agende sua avaliação gratuita.
                            </p>
                            <a
                                href=""
                                className="bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-rose-300 transition-all duration-300 shadow-lg text-center transform hover:scale-105 hover:translate-z-0"
                            >
                                Quero meu desconto!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}