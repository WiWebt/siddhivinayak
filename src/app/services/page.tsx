import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'ear-care',
    title: 'Ear Care Services',
    description: 'Comprehensive ear care including hearing tests, surgeries, and treatments.',
    image: '/images/services/ear-care.jpg'
  },
  {
    id: 'nose-sinus',
    title: 'Nose & Sinus Care',
    description: 'Advanced treatments for nasal and sinus conditions.',
    image: '/images/services/nose-care.jpg'
  },
  {
    id: 'throat-voice',
    title: 'Throat & Voice Treatment',
    description: 'Specialized care for throat conditions and voice disorders.',
    image: '/images/services/throat-care.jpg'
  },
  {
    id: 'head-neck',
    title: 'Head & Neck Care',
    description: 'Comprehensive treatment for head and neck conditions.',
    image: '/images/services/head-neck.jpg'
  },
  {
    id: 'pediatric',
    title: 'Pediatric ENT Services',
    description: 'Specialized ENT care for children.',
    image: '/images/services/pediatric-ent.jpg'
  },
  {
    id: 'balance',
    title: 'Balance & Dizziness Treatment',
    description: 'Expert care for balance disorders and dizziness.',
    image: '/images/services/balance-dizziness.jpg'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Our Services</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive ENT care services provided by experienced specialists using advanced medical technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              href={`/services/${service.id}`}
              key={service.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden card-hover"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  Learn more
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}