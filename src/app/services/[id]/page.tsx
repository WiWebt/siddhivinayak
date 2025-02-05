import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This is the same services data from the main services page
const services = [
  {
    id: 'ear-care',
    title: 'Ear Care Services',
    description: 'Comprehensive ear care including hearing tests, surgeries, and treatments.',
    image: '/images/services/ear-care.jpg',
    longDescription: 'Our ear care services provide comprehensive diagnosis and treatment for all types of ear conditions. We use state-of-the-art equipment and advanced techniques to ensure the best possible care for our patients.',
    services: [
      'Hearing Aid Fitting',
      'Ear Wax Removal',
      'Foreign Body Removal (Ear)',
      'Myringoplasty (Eardrum Repair)',
      'Hearing Loss Evaluation & Treatment',
      'Ear Infections Treatment',
      'Ear Drum Perforation Treatment',
      'Ear Canal Surgery',
      'Ear Reconstruction Surgery'
    ]
  },
  {
    id: 'nose-sinus',
    title: 'Nose & Sinus Care',
    description: 'Advanced treatments for nasal and sinus conditions.',
    image: '/images/services/nose-care.jpg',
    longDescription: 'Our nose and sinus care services offer comprehensive treatment for various nasal and sinus conditions. We use advanced diagnostic tools and treatment methods to provide effective relief from sinus-related problems.',
    services: [
      'Sinus Surgery',
      'Nasal Allergy Treatment',
      'Nasal Polypectomy (Polyp Removal)',
      'Septoplasty (Nasal Septum Surgery)',
      'Sinus Endoscopy',
      'Nasal Fracture Treatment',
      'Chronic Sinusitis Management',
      'Nasal Congestion Relief'
    ]
  },
  {
    id: 'throat-voice',
    title: 'Throat & Voice Treatment',
    description: 'Specialized care for throat conditions and voice disorders.',
    image: '/images/services/throat-care.jpg',
    longDescription: 'Our throat and voice treatment services focus on diagnosing and treating various throat conditions and voice disorders. We provide personalized care plans to help restore and maintain optimal vocal health.',
    services: [
      'Tonsillitis Treatment',
      'Throat Infection Management',
      'Voice Therapy',
      'Speech & Swallowing Therapy',
      'Snoring & Sleep Apnea Treatment',
      'Throat Cancer Screening',
      'Throat Swelling & Pain Treatment',
      'Laryngeal Disorders Treatment'
    ]
  },
  {
    id: 'head-neck',
    title: 'Head & Neck Care',
    description: 'Comprehensive treatment for head and neck conditions.',
    image: '/images/services/head-neck.jpg',
    longDescription: 'Our head and neck care services provide comprehensive treatment for various conditions affecting the head and neck region. We offer both surgical and non-surgical treatment options.',
    services: [
      'Headache & Neck Pain Management',
      'Thyroid & Parathyroid Surgery',
      'Head & Neck Cancer Treatment',
      'Facial Trauma Surgery',
      'Facial Plastic Surgery',
      'Sleep Studies for Sleep Disorders'
    ]
  },
  {
    id: 'pediatric',
    title: 'Pediatric ENT Services',
    description: 'Specialized ENT care for children.',
    image: '/images/services/pediatric-ent.jpg',
    longDescription: 'Our pediatric ENT services are specially designed to cater to the unique needs of children. We provide child-friendly care in a comfortable environment.',
    services: [
      'Pediatric Ear Infections Treatment',
      'Pediatric Sinusitis Treatment',
      'Pediatric Tonsillectomy',
      'Pediatric Snoring Treatment',
      'Speech Therapy for Children',
      'Pediatric Sleep Apnea Treatment',
      'Pediatric Voice Disorders Treatment'
    ]
  },
  {
    id: 'balance',
    title: 'Balance & Dizziness Treatment',
    description: 'Expert care for balance disorders and dizziness.',
    image: '/images/services/balance-dizziness.jpg',
    longDescription: 'Our balance and dizziness treatment services help diagnose and treat various vestibular disorders. We use advanced diagnostic equipment to determine the root cause of balance issues.',
    services: [
      'Vertigo & Dizziness Management',
      'Balance Testing & Treatment'
    ]
  }
];

// Add this function to generate static params
export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find(s => s.id === params.id);
  
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/services" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8">
                <h1 className="text-4xl font-bold text-white mb-4">{service.title}</h1>
                <p className="text-white/90 text-lg max-w-2xl">{service.description}</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold mb-6 gradient-text">About this Service</h2>
              <p className="text-gray-600 text-lg mb-8">{service.longDescription}</p>
              
              <h2 className="text-2xl font-semibold mb-6 gradient-text">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.services.map((item, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/appointment" 
                  className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Book an Appointment
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}