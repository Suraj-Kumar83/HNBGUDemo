'use client';

// --- Placeholder Data for Gallery ---
// The component will only display the first three images from this list.
const images = [
  { src: '/pic1.png', title: 'University Campus View' },
  { src: '/pic2.png', title: 'Annual Cultural Event' },
  { src: '/pic3.png', title: 'HNBGU Main Gate' },
  { src: '/new2.jpg', title: 'Central Library' },
  { src: '/pic4.jpeg', title: 'Student Life' },
];

// --- The main GallerySection component ---
const GallerySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800">Gallery</h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Cherishing the remarkable and unforgettable moments that define our journey of learning and discovery.
        </p>

        {/* Gallery Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {images.slice(0, 3).map((image, index) => (
            <div key={index} className="rounded-xl shadow-md overflow-hidden group cursor-pointer">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/64748b?text=Image+Not+Found'; }}
              />
            </div>
          ))}
        </div>
        
        {/* View Full Gallery Button */}
        <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center justify-center px-8 py-3 bg-green-800 text-white font-semibold rounded-full hover:bg-green-900 transition-colors duration-300 shadow-lg">
                View Full Gallery 
                <span className="ml-2 text-xl">→</span>
            </a>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;

