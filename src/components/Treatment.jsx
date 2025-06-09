
import LimpezaPele from '../assets/limpeza-de-pele.png'
import SpaDosPes from '../assets/spa-dos-pes.webp'
import Drenagem from '../assets/drenagem-linfatica-abdominal.jpg'
import MassagemRelaxante from '../assets/massagem-relaxante.webp'
import MassagemModeladora from '../assets/massagem-modeladora.webp'
import TratamentoFacial from '../assets/revitalizacao-facial.webp'


export function Treatment() {
    return (
        <section className="flex flex-col items-center justify-center px-4 mt-20 mb-40 ">
            <div className="flex flex-col justify-center items-center h-full mt-20 text-center px-4">
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">Nossos Tratamentos</h2>
                <p className="text-gray-600 max-w-2xl max-auto text-lg">Descubra nossa variedade de tratamentos especializados, pensados para cuidar de você de forma completa e personalizada.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                <div className="w-[400px] relative overflow-hidden rounded-3xl border border-rose-100 shadow-lg bg-white transition-transform duration-300 hover:-translate-y-4">
                    <img src={LimpezaPele} alt='Foto-Limpeza-de-pele' className='w-[400px] h-70 object-cover transition-transform duration-300 hover:scale-110' />
                    <p className='absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm'>60 min</p>
                    <div className='py-8'>
                        <h3 className='text-xl font-playfair font-bold text-gray-800 ml-4'>Limpeza de Pele</h3>
                        <p className='text-gray-600 mb-4 leading-relaxed ml-4'>Tratamento profundo para remover impurezas e renovar a pele do rosto</p>
                        <div className='flex items-center gap-8'>
                            <a className='bg-rose-600 text-white text-center py-2 px-4 rounded-lg ml-20 cursor-pointer hover:bg-rose-700'>
                                Agendar
                            </a>
                            <a className='px-4 py-2 border border-rose-600 text-rose-600 rounded-lg cursor-pointer hover:bg-rose-50 transition-colors '>
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-[400px] relative overflow-hidden rounded-3xl border border-rose-100 shadow-lg bg-white transition-transform duration-300 hover:-translate-y-4">
                    <img src={SpaDosPes} alt='Spa-dos-Peles' className='w-[400px] h-70 object-cover transition-transform duration-300 hover:scale-110' />
                    <p className='absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm'>45 min</p>
                    <div className='py-8'>
                        <h3 className='text-xl font-playfair font-bold text-gray-800 ml-4'>Spa dos Pés</h3>
                        <p className='text-gray-600 mb-4 leading-relaxed ml-4'>Relaxamento completo com hidratação e cuidados especiais para os pés</p>
                        <div className='flex items-center gap-8'>
                            <a className='bg-rose-600 text-white text-center py-2 px-4 rounded-lg ml-20 cursor-pointer hover:bg-rose-700'>
                                Agendar
                            </a>
                            <a className='px-4 py-2 border border-rose-600 text-rose-600 rounded-lg cursor-pointer hover:bg-rose-50 transition-colors '>
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-[400px] relative overflow-hidden rounded-3xl border border-rose-100 shadow-lg bg-white transition-transform duration-300 hover:-translate-y-4">
                    <img src={Drenagem} alt='Drenagem-linfatica' className='w-[400px] h-70 object-cover transition-transform duration-300 hover:scale-110' />
                    <p className='absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm'>90 min</p>
                    <div className='py-8'>
                        <h3 className='text-xl font-playfair font-bold text-gray-800 ml-4'>Drenagem Linfática</h3>
                        <p className='text-gray-600 mb-4 leading-relaxed ml-4'>Técnica especializada para eliminar toxinas e reduzir inchaços</p>
                        <div className='flex items-center gap-8'>
                            <a className='bg-rose-600 text-white text-center py-2 px-4 rounded-lg ml-20 cursor-pointer hover:bg-rose-700'>
                                Agendar
                            </a>
                            <a className='px-4 py-2 border border-rose-600 text-rose-600 rounded-lg cursor-pointer hover:bg-rose-50 transition-colors '>
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-[400px] relative overflow-hidden rounded-3xl border border-rose-100 shadow-lg bg-white transition-transform duration-300 hover:-translate-y-4">
                    <img src={MassagemRelaxante} alt='Massagem-Relaxante' className='w-[400px] h-70 object-cover transition-transform duration-300 hover:scale-110' />
                    <p className='absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm'>60 min</p>
                    <div className='py-8'>
                        <h3 className='text-xl font-playfair font-bold text-gray-800 ml-4'>Massagem Relaxante</h3>
                        <p className='text-gray-600 mb-4 leading-relaxed ml-4'>Alívio do stress e tensões com técnicas de relaxamento profundo</p>
                        <div className='flex items-center gap-8'>
                            <a className='bg-rose-600 text-white text-center py-2 px-4 rounded-lg ml-20 cursor-pointer hover:bg-rose-700'>
                                Agendar
                            </a>
                            <a className='px-4 py-2 border border-rose-600 text-rose-600 rounded-lg cursor-pointer hover:bg-rose-50 transition-colors '>
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-[400px] relative overflow-hidden rounded-3xl border border-rose-100 shadow-lg bg-white transition-transform duration-300 hover:-translate-y-4">
                    <img src={MassagemModeladora} alt='Massagem-Modeladora' className='w-[400px] h-70 object-cover transition-transform duration-300 hover:scale-110' />
                    <p className='absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm'>75 min</p>
                    <div className='py-8'>
                        <h3 className='text-xl font-playfair font-bold text-gray-800 ml-4'>Massagem Modeladora</h3>
                        <p className='text-gray-600 mb-4 leading-relaxed ml-4'>Técnicas específicas para modelar o corpo e melhorar a circulação</p>
                        <div className='flex items-center gap-8'>
                            <a className='bg-rose-600 text-white text-center py-2 px-4 rounded-lg ml-20 cursor-pointer hover:bg-rose-700'>
                                Agendar
                            </a>
                            <a className='px-4 py-2 border border-rose-600 text-rose-600 rounded-lg cursor-pointer hover:bg-rose-50 transition-colors '>
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-[400px] relative overflow-hidden rounded-3xl border border-rose-100 shadow-lg bg-white transition-transform duration-300 hover:-translate-y-4">
                    <img src={TratamentoFacial} alt='Massagem-Modeladora' className='w-[400px] h-70 object-cover transition-transform duration-300 hover:scale-110' />
                    <p className='absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm'>90 min</p>
                    <div className='py-8'>
                        <h3 className='text-xl font-playfair font-bold text-gray-800 ml-4'>Revitalização Facial</h3>
                        <p className='text-gray-600 mb-4 leading-relaxed ml-4'>Tratamento anti-idade para renovar e revitalizar a pele do rosto</p>
                        <div className='flex items-center gap-8'>
                            <a className='bg-rose-600 text-white text-center py-2 px-4 rounded-lg ml-20 cursor-pointer hover:bg-rose-700'>
                                Agendar
                            </a>
                            <a className='px-4 py-2 border border-rose-600 text-rose-600 rounded-lg cursor-pointer hover:bg-rose-50 transition-colors '>
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}