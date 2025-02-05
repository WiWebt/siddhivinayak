import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/utils/path';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
          <Image
            src={getImagePath('/images/hero-banner.jpg')}
            alt="About Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              About Siddhivinayak ENT Care
            </h1>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              To provide exceptional ENT care using advanced medical technologies and 
              personalized treatment approaches, ensuring the best possible outcomes 
              for our patients.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg">
              To be the leading ENT care provider in Pune, recognized for our excellence 
              in patient care, innovative treatments, and commitment to community health.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src={getImagePath('/images/clinic_gallery/clinic_entry.jpg')}
              alt="Our Clinic"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Excellence in ENT Care</h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Established with a vision to provide comprehensive ENT care, Siddhivinayak 
                Advanced ENT Care Centre has been serving the community for over two decades.
              </p>
              <p>
                Our state-of-the-art facility is equipped with the latest medical technology, 
                enabling us to provide accurate diagnosis and effective treatment for all ENT 
                conditions.
              </p>
              <p>
                Led by experienced specialists Dr. Manoj M. Bauskar and Dr. Pranita Bauskar, 
                our team is committed to delivering personalized care with compassion and 
                expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">Over 20 years of experience in ENT care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Facility</h3>
              <p className="text-gray-600">State-of-the-art equipment and technology</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Patient-Centric Care</h3>
              <p className="text-gray-600">Personalized treatment plans for every patient</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience Expert ENT Care?</h2>
          <Link
            href="/appointment"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Book an Appointment Today
          </Link>
        </div>
      </div>
    </div>
  );
}