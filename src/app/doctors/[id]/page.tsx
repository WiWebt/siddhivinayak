import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getImagePath } from '@/utils/path';

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
    image: getImagePath('/images/doctors/doctor1.jpg'),
    bio: `Dr. Manoj M. Bauskar is a highly experienced ENT specialist with over 21 years of dedicated service in the field. He specializes in both adult and pediatric ENT care, offering comprehensive treatment for various ear, nose, and throat conditions.`,
    expertise: [
      'Advanced ear surgery',
      'Pediatric ENT procedures',
      'Head and neck surgery',
      'Hearing loss treatment',
      'Sinus surgery',
      'Voice disorders'
    ],
    education: [
      'MBBS',
      'Diploma in Otorhinolaryngology (DLO)',
      'DNB - Otorhinolaryngology'
    ]
  },
  {
    id: 'pranita-bauskar',
    name: 'Dr. Pranita Kasat-Bauskar',
    qualifications: 'MBBS, FCPS - Oto-Rhino-Laryngology',
    experience: '20 years experience',
    specializations: [
      'ENT/Otorhinolaryngologist',
      'Otologist/Neurotologist',
      'Pediatric Otorhinolaryngologist'
    ],
    availability: 'Mon-Sat 10:30-01:30',
    image: getImagePath('/images/doctors/doctor2.jpg'),
    bio: `Dr. Pranita Bauskar brings 20 years of expertise in ENT care, with a special focus on pediatric ENT conditions and advanced diagnostic procedures. Her patient-centered approach ensures comprehensive care for all age groups.`,
    expertise: [
      'Pediatric ENT care',
      'Audiological evaluations',
      'Balance disorders',
      'Ear infections treatment',
      'Nasal allergies',
      'Throat conditions'
    ],
    education: [
      'MBBS',
      'FCPS - Oto-Rhino-Laryngology'
    ]
  }
];

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    id: doctor.id,
  }));
}

export default function DoctorPage({ params }: { params: { id: string } }) {
  const doctor = doctors.find(d => d.id === params.id);
  
  if (!doctor) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        <Link href="/doctors" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to Doctors
        </Link>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[500px] md:h-auto">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{doctor.name}</h1>
              <p className="text-xl text-gray-600 mb-2">{doctor.qualifications}</p>
              <p className="text-lg text-blue-600 font-medium mb-6">{doctor.experience}</p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">Specializations</h2>
                  <ul className="space-y-2">
                    {doctor.specializations.map((spec, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-3">Availability</h2>
                  <p className="text-gray-600">{doctor.availability}</p>
                </div>
                
                <Link 
                  href="/appointment" 
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
          
          <div className="p-8 border-t">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-gray-600 text-lg mb-8">{doctor.bio}</p>
              
              <h2 className="text-2xl font-semibold mb-4">Areas of Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {doctor.expertise.map((item, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <ul className="space-y-2">
                {doctor.education.map((edu, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                    {edu}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}