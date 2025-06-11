import React, { useEffect, useCallback, useState } from "react"
import useEmblaCarousel from 'embla-carousel-react'



const testimonials = [

    {
        message: "A melhor experiência que já tive com massagem! O ambiente é acolhedor e os profissionais são extremamente qualificados.",
        name: 'Juliana R.',
        specialty: 'Massagem Relaxante'
    },
    {
        message: "O spa dos pés é incrível! Saí de lá me sentindo renovada e com os pés macios como nunca.",
        name: 'Maria Santos',
        specialty: 'Spa dos Pés'
    },
    {
        message: 'A limpeza de pele foi perfeita! Minha pele ficou lisinha e radiante. Recomendo muito!',
        name: 'Ana Colina',
        specialty: 'Limpeza de Pele'
    },
    {
        message: 'Fiz a drenagem linfática e me senti muito mais leve. O atendimento é excepcional!',
        name: 'Fernanda Lima',
        specialty: 'Drenagem Linfática'
    },
    {
        message: 'A revitalização facial superou minhas expectativas. Minha pele está com aspecto jovem e saudável!',
        name: 'Beatriz Costa',
        specialty: 'Beatriz Costa'
    },

];


export function Testimony() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on('select', onSelect)
        const interval = setInterval(() => {
            emblaApi.scrollNext()
        }, 5000)
        return () => clearInterval(interval)
    }, [emblaApi, onSelect])

    const scrollTo = useCallback((idx) => {
        if (emblaApi) emblaApi.scrollTo(idx)
    }, [emblaApi])


    return (


        <section className="py-20 bg-pink-50">
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">O que nossas clientes dizem</h2>
                <p className="text-gray-600 text-lg">A satisfação das nossas clientes é nossa maior recompensa. Confira alguns depoimentos de quem já viveu essa experiência.</p>
            </div>
            <div className="mx-w-4xl mx-auto">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((t, idx) => (
                            <div className="min-w-0 flex-[0_0_100%] flex justify-center px-4 " key={idx}>
                                <blockquote className="bg-white rounded-3xl shadow-lg p-14 mx-2 text-center mx-w-2xl">
                                    <p className="text-2xl italic text-gray-700 mb-6">{t.message}</p>
                                    <footer>
                                        <span className="block font-bold text-gray-800">{t.name}</span>
                                        <span className="block text-pink-600">{t.specialty}</span>
                                    </footer>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-3 mt-6">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`h-3 w-8 rounded-full transition-all duration-300 ${selectedIndex === idx ? 'bg-pink-600' : 'bg-pink-200'}`}
                            onClick={() => scrollTo(idx)}
                            aria-label={`Ir para depoimento ${idx + 1}`}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <a href="#"
                        className="bg-pink-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-pink-700 transition-colors duration-300"
                    >
                        Quero agendar meu horário!
                    </a>
                </div>
            </div>
        </section>
    )
}