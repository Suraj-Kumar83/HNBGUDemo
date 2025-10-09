'use client';
import { useState } from 'react';

const VCMessageSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // The full message provided by the user
  const fullMessage = "Hemvati Nandan Bahuguna Garhwal University named after the Late Sri Hemvati Nandan Bahuguna, was established in 1973 after a mass movement launched to fulfill higher education needs of this remote and geographically difficult region. Since then the University has travelled a long way and made laudable progress to achieve the goals envisioned by the esteemed son of the soil “Hemvati”. The impressive network of the university’s distinguished alumni is a testament to its institutional contribution to the local community. In 2009, a parliamentary act granted the status of a central university to this unique establishment. Among its three distantly located campuses Birla Campus Srinagar with its extension Chauras; BGR Campus, Pauri and SRT Campus, Tehri, significant infrastructural development as well as noteworthy academic accomplishments have been achieved since 2009. The transformation in academic and administrative set up and quality education based on performance indicators has allowed the University to excel in meeting the expectations of all the stakeholders, achieving academic excellence, and inspiring the youth to participate fervent in civic society. The geographical difficulties, dusty and bumpy roads, lack of easy accessibility, connectivity, competitive awareness, communication skills and knowledge among the students hamper their critical thinking. However, despite the hardships, the students’ interactions with scholars from different parts of India and abroad through various conferences are proving beneficial for all the stakeholders for achieving the goal of all round excellence. Other avenues of student development include workshops, academic and administrative development programmes, extension activities through NSS/NCC, cultural exchanges, sports and other government of India sponsored programmes like Eak Bharat Shrestra Bharat, Unnat Bharat Abhiyan etc. 49 Departments and 11 Schools of Study are leading the university toward a bright trajectory. The university strives to achieve the goal of bridging the gap between education, research, innovation and extension as per the mandate of the National Education Policy 2020 by taking all its programmes from lab to land for the betterment of community and students. The “A” accreditation by NAAC, the MoUs signed with the eminent national and foreign universities, research projects funded by DST, DBT, ICSSR, GBPIHED, and others, the quality research publications, interdisciplinary multi institutional researches, sharing of best practices, community outreach also vouch for this. The recent formation of “Indian Himalayan Central Universities’ Consortium”consisting of fourteen universities/institutions located in Indian Himalayan region speaks about the vision of the HNB Garhwal University of working relentlessly for “One Himalaya” and research and innovation with a human face. The patronage of NITI Aayog and Hon’ble Minister of education Shri Ramesh Pokhriyal Nishank Ji, for this unique initiative highlights the importance of this consortium wherein for the first times thirteen universities have joined hands for the cause of one Himalaya for the betterment of the inhabitants. This includes the sacrifices made by the people particularly the local unsung women for the cause of higher education of this area. Furthermore, the contribution of the founding fathers who worked day and night with very meager resources but with zeal to chart the path of progress, excellence and coordination can never be overlooked. The work culture developed by founding fathers; the vice chancellors with miniscule resources but the name and fame earned by the university during their tenures clearly indicate that the upkeep of institutional legacies require relentless labour from all involved. Even a small contribution from an employee sitting on the lowest ladder has played a very commendable role in the growth of the university. The ever energetic and curious students and the dedicated faculty have strived very hard to make HNB Garhwal University a great institution of learning and research. The institution is functioning because of their immense contribution only. This should be the main motto of any institution as individuals come and go, but institutions remain intact to excel, shine and to nurturing talent. Therefore, a parochial attitude toward institutional development should be shunned to transform the institution as well as to meet the multiple challenges of the new age. The constricted mindset will only obstruct our growth and progress. Ultimately, we should whole-heartedly work for the betterment of the university and fulfill the dreams of the people associated with it.";

  // Create a shorter version for the initial view
  const snippet = `${fullMessage.substring(0, 550)}...`;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left Column: VC's Photo and Name */}
          <div className="md:w-1/4 text-center flex-shrink-0">
            <img
              src="/vc.jpeg" // Add your VC's photo to the `public` folder and name it vc-photo.jpg
              alt="Prof. Shri Prakash Singh, Vice-Chancellor"
              className="w-48 h-48 rounded-full mx-auto shadow-lg object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/e2e8f0/64748b?text=VC'; }}
            />
            <h3 className="mt-4 text-xl font-bold text-gray-800">Prof. Shri Prakash Singh</h3>
            <p className="text-gray-600">Vice-Chancellor, HNBGU</p>
          </div>

          {/* Right Column: Message */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Message from the Vice-Chancellor</h2>
            <div className="text-gray-700 space-y-4 text-justify leading-relaxed">
              <p>{isExpanded ? fullMessage : snippet}</p>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 px-6 py-2 border border-green-800 text-green-800 font-semibold rounded-md hover:bg-green-800 hover:text-white transition-colors duration-300"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VCMessageSection;
