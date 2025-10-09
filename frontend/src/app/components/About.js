// components/AboutSection.js

// This component provides a brief description or "about us" section.
const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          We are a team of passionate developers and designers dedicated to creating beautiful, functional,
          and user-friendly web experiences. Our goal is to help businesses succeed in the digital world through innovation and technology.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
