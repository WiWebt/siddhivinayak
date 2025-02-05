import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'ear-care',
    title: 'Ear Care',
    description: 'Comprehensive ear care including hearing tests, wax removal, and surgery',
    image: '/images/services/ear-care.jpg',
  },
  {
    id: 'nose-sinus',
    title: 'Nose & Sinus Care',
    description: 'Treatment for sinusitis, allergies, and nasal surgeries',
    image: '/images/services/nose-care.jpg',
  },
  {
    id: 'throat-voice',
    title: 'Throat & Voice Treatment',
    description: 'Voice disorders, tonsillitis, and advanced throat treatments',
    image: '/images/services/throat-care.jpg',
  },
  {
    id: 'head-neck',
    title: 'Head & Neck Care',
    description: 'Comprehensive treatment for head and neck conditions',
    image: '/images/services/head-neck.jpg',
  },
  {
    id: 'pediatric',
    title: 'Pediatric ENT',
    description: 'Specialized ENT care for children',
    image: '/images/services/pediatric-ent.jpg',
  },
  {
    id: 'balance',
    title: 'Balance & Dizziness',
    description: 'Expert care for balance disorders and dizziness',
    image: '/images/services/balance-dizziness.jpg',
  }
];

const doctors = [
  {
    id: 'manoj-bauskar',
    name: 'Dr. Manoj M. Bauskar',
    qualifications: 'MBBS, Diploma in Otorhinolaryngology (DLO), DNB - Otorhinolaryngology',
    experience: '21 years experience',
    specializations: [
      'ENT/Otorhinolaryngologist',
      'Otologist/Neurotologist',
      'Head and Neck Surgeon',
      'Pediatric Otorhinolaryngologist'
    ],
    consultationFee: '₹600',
    availability: 'Mon-Sat 05:30-08:30',
    image: '/images/doctors/doctor1.jpg'
  },
  {
    id: 'pranita-bauskar',
    name: 'Dr. Pranita Bauskar',
    qualifications: 'MBBS, FCPS - Oto-Rhino-Laryngology',
    experience: '20 years experience',
    specializations: [
      'ENT/Otorhinolaryngologist',
      'Otologist/Neurotologist',
      'Pediatric Otorhinolaryngologist'
    ],
    consultationFee: '₹600',
    availability: 'Mon-Sat 10:30-01:30',
    image: '/images/doctors/doctor2.jpg'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="ENT Care"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced ENT Care Centre
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Expert care for your Ear, Nose, and Throat health needs
          </p>
          <Link
            href="/appointment"
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Comprehensive ENT care services provided by experienced specialists using advanced medical technology.
            </p>
          </div>
          
          <div className="relative mb-8">
            <div className="overflow-x-auto pb-8">
              <div className="flex space-x-6 min-w-max px-4">
                {services.map((service) => (
                  <Link
                    href={`/services/${service.id}`}
                    key={service.id}
                    className="group bg-white rounded-xl shadow-md overflow-hidden card-hover flex-shrink-0 w-[400px]"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-blue-600 font-medium">
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
            <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-gray-50 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-gray-50 pointer-events-none"></div>
          </div>

          <div className="text-center">
            <Link 
              href="/services" 
              className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Clinic Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Our Facility</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Take a virtual tour of our state-of-the-art clinic and facilities.
          </p>
          
          <div className="relative">
            <div className="overflow-x-auto pb-8">
              <div className="flex space-x-6 min-w-max px-4">
                {[
                  { src: '/images/clinic_gallery/opt.jpg', alt: 'Operating Theatre' },
                  { src: '/images/clinic_gallery/room.jpg', alt: 'Private Rooms' }
                  // Add more gallery images here as they become available
                ].map((image, index) => (
                  <div
                    key={index}
                    className="relative h-80 w-[500px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg group"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-6 font-medium">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-gray-50 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-gray-50 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">About Our Clinic</h2>
              <p className="text-gray-600 mb-6">
                Siddhivinayak Advanced ENT Care Centre is a state-of-the-art facility dedicated to providing comprehensive ear, nose, and throat care. Our experienced specialists use advanced medical technology to ensure the best possible outcomes for our patients.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/clinic_gallery/clinic_entry.jpg"
                alt="Our Clinic"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialists Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {doctors.map((doctor) => (
              <Link
                href={`/doctors/${doctor.id}`}
                key={doctor.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-80">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-gray-600 mb-3">{doctor.qualifications}</p>
                  <p className="text-blue-600 font-medium mb-4">{doctor.experience}</p>
                  <div className="space-y-2">
                    <p className="text-gray-600"><strong>Availability:</strong> {doctor.availability}</p>
                    <p className="text-gray-600"><strong>Consultation Fee:</strong> {doctor.consultationFee}</p>
                  </div>
                  <span className="inline-block mt-4 text-blue-600 font-medium">View Full Profile →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Insurance Partners</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We work with leading insurance providers to ensure you get the best coverage for your treatment.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Acko Insurance', logo: '/images/insurance/acko.png' },
              { name: 'Reliance Insurance', logo: '/images/insurance/reliance.png' },
              { name: 'TATA AIG', logo: '/images/insurance/tata.png' },
              { name: 'Star Health', logo: '/images/insurance/star-health.png' },
              { name: 'HDFC ERGO', logo: '/images/insurance/hdfc-ergo.png' },
              { name: 'Bajaj Allianz', logo: '/images/insurance/bajaj-allianz.png' }
            ].map((insurance, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <div className="relative h-16 w-full mb-4">
                    <Image
                      src={insurance.logo}
                      alt={insurance.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Expert ENT Care?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and take the first step towards better ENT health.
          </p>
          <Link 
            href="/appointment" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
