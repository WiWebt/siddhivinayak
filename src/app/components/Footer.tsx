import Link from 'next/link';

export default function Footer() {
  const googleMapsUrl = "https://www.google.com/maps?q=Siddhivinayak+Advanced+ENT+Care+Centre+Pune";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Siddhivinayak ENT</h3>
            <p className="text-gray-300">Expert ENT care with state-of-the-art facilities and experienced specialists.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#ear" className="text-gray-300 hover:text-white">Ear Care</Link></li>
              <li><Link href="/services#nose" className="text-gray-300 hover:text-white">Nose & Sinus Care</Link></li>
              <li><Link href="/services#throat" className="text-gray-300 hover:text-white">Throat Care</Link></li>
              <li><Link href="/services#pediatric" className="text-gray-300 hover:text-white">Pediatric ENT</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="mr-2">📍</span>
                  <span>210, 2nd Floor, Adinath Shopping Complex, Pune-Satara Road, Bibvewadi, Pune-411037</span>
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>9322893227 / 848498978</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <span>info@siddhivinayakentcare.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Siddhivinayak ENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}