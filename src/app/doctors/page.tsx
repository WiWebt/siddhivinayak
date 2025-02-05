import Image from 'next/image';
import Link from 'next/link';

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
    availability: 'Mon-Sat 10:30-01:30',
    image: '/images/doctors/doctor2.jpg'
  }
];

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Specialists</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{doctor.name}</h2>
                <p className="text-gray-600 mb-3">{doctor.qualifications}</p>
                <p className="text-blue-600 font-medium mb-4">{doctor.experience}</p>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>Availability:</strong> {doctor.availability}</p>
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Specializations:</h3>
                    <ul className="space-y-1">
                      {doctor.specializations.map((spec, index) => (
                        <li key={index} className="text-gray-600 flex items-center">
                          <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                          </svg>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}