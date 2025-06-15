import BemEstar from '../assets/spa.avif'

export function About() {
    return (
        <section className='py-20 to-white from-rose-50 bg-gradient-to-b'>
            <div className='grid md:grid-cols-2 gap-12 items-center px-4'>
                <div className='flex flex-col'>
                    <h2 className='text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-6' data-aos="fade-right" data-aos-delay='0'>
                        Conheça Nossa História
                    </h2>
                    <p className='text-gray-600 mb-6 leading-relaxed' data-aos="fade-right" data-aos-delay='100'>
                        Há mais de 10 anos, nossa clínica tem sido um refúgio de beleza e bem-estar, dedicada a proporcionar experiências transformadoras através de tratamentos personalizados e cuidado especializado.
                    </p>
                    <p className='text-gray-600 mb-6 leading-relaxed' data-aos="fade-right" data-aos-delay='200'>
                        Acreditamos que cada pessoa possui uma beleza única, e nossa missão é realçar essa beleza natural através de técnicas avançadas e um atendimento humanizado e acolhedor.
                    </p>
                    <div className='bg-white p-6 rounded-lg shadow-lg border-l-4 border-rose-500' data-aos="fade-right" data-aos-delay='300'>
                        <h3 className='font-playfair font-bold text-xl text-gray-800 mb-3'>Nossa História</h3>
                        <p className='text-gray-600'>
                            Proporcionar momentos de autocuidado e bem-estar, elevando a autoestima e promovendo a beleza natural de cada cliente através de tratamentos de excelência.
                        </p>
                    </div>
                    <p className='text-gray-600 mt-4 text-right md:text-left text-sm md:text-base' data-aos="fade-right" data-aos-delay='300'>
                        Mais de 500 clientes satisfeitas
                    </p>
                </div>
                <div className="relative flex justify-center mt-10 md:mt-0">
                    <div className='absolute -top-6 right-4 md:right-0 bg-rose-600 text-white p-4 rounded-lg shadow-lg'>
                        <p className='text-2xl font-bold text-center'>500+</p>
                        <p className='text-sm text-center'>Clientes Felizes</p>
                    </div>
                    <img
                        className='w-full max-w-[400px] md:max-w-[650px] rounded-lg shadow-lg object-cover'
                        src={BemEstar}
                        alt='sala-para-spa'
                    />
                    <div className='absolute -bottom-6 left-4 md:-left-6 bg-white p-4 rounded-lg shadow-lg'>
                        <p className='text-rose-500 text-2xl font-bold text-center'>10+</p>
                        <p className='text-sm text-center'>Anos de experiências</p>
                    </div>
                </div>
            </div>
        </section>
    )
}