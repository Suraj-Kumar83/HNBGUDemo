// components/NewsletterSection.js

// This component is for a newsletter signup form.
const NewsletterSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-700 mb-8">
          Stay up to date with our latest news, projects, and special offers. No spam, we promise!
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto flex-grow p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <button
            type="submit"
            className="bg-gray-800 text-white font-bold py-4 px-8 rounded-md hover:bg-gray-900 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
