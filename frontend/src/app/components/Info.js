// --- Data for the info cards ---
const statsData = [
  { label: 'Faculty*', value: '500+' },
  { label: 'Students', value: '15,000+' },
  { label: 'Publications', value: '4,000+' },
  { label: 'Affiliated Colleges*', value: '100+' },
  { label: 'Projects*', value: '1,500+' },
];

// --- Sub-component for a single stat card ---
const StatCard = ({ label, value }) => (
  <div className="bg-sky-50/70 p-8 rounded-2xl shadow-lg text-center w-full">
    <p className="text-lg font-semibold text-gray-700 mb-2">{label}</p>
    <p className="text-4xl font-bold text-gray-900">{value}</p>
  </div>
);

// --- The main InfoSection component ---
const InfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        
        {/* Footnotes */}
        <div className="text-center text-xs text-gray-500 mt-8 space-y-1">
          <p>*Faculty: 350 permanent and 150+ contractual.</p>
          <p>*Affiliated Colleges: Includes both government and private institutions.</p>
          <p>*Total sponsored projects: 980, Total consultancy projects: 520.</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
