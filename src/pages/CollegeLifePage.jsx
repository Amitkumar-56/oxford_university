import React from 'react';
import { ChevronRight, Users, Award, ShieldCheck } from 'lucide-react';
import hmSmall4 from '../assets/image/hm_small4.jpg';
import awareness1 from '../assets/image/awareness11738490513.jpg';
export default function CollegeLifePage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1a1a]">
      {}
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-6">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button onClick={() => handleNav('studying')} className="hover:text-white transition">
              Studying at SKSIL
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">College Life</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Vibrant Campus Atmosphere
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              College Life at SKSIL
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Experience an inspiring blend of rigorous courtroom training, cultural symposiums, sports meets, and community legal aid empowerment.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto space-y-12">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
            Holistic Student Growth
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] mt-1 mb-6">
            A Supportive & Inspiring Legal Community
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              Our college is located at Banda, Uttar Pradesh, nestled amidst Mother Nature. This makes our campus calm and serene, which radiates the energy of knowledge. Kanpur, another bustling industrial city is just about 90 kms from SKSIL.
            </p>
            <p>
              Apart from well-equipped classrooms and a well-stocked library, the campus is home to several facilities that promote extracurricular activities which play a major role in shaping the personality and perspectives of students. Typically, our students are usually busy in the classroom, participating in a discussion with professors, or in the library, browsing through the vast ocean of a collection of legal books, or in the auditorium, taking part in moot courts, or in the playground… participating in sports activities! You will never find yourself with nothing to do!! The college strives to cater to every need of the student to nurture their versatility.
            </p>
            <p>
              As most of us are aware, courtrooms are basically argument centers. To prepare our students for such real-life situations, we train them on debating and elocution. Periodic competitions to hone oratory skills prepare them thoroughly for the real-life courtroom battles. Moot Court competitions for example hone their knowledge and skill in a make- do court room scenario.
            </p>
            <p>
              Practice of Law requires a notable skill in writing. We strive to enhance the writing skills of our students and organise various events from time to time so that learning is continuous, and fun filled.
            </p>
            <p>
              It is said, <strong className="text-stone-900">a lot of what you are is a lot of where you have been.</strong> A very important feature of life on campus is the annual academic tour. Our students are taken to various courts, including the High Court and Supreme Court for better understanding of how Indian law is practiced. In the process, they are enriched by life experiences which only travel could give them. On shorter visits, we take you out to visit a Police Station or a Tehseel or even to a Lok Adalat. This would lay bare the ground level knowledge required pursue law. In addition, students have organised legal awareness camps on their own to serve the community better, thereby enhancing their own knowledge in real life scenarios.
            </p>
            <p>
              Our sports facility adds a robust dimension to the campus. Equipped to make our students physically fit, the emphasis is also on recreational games which refresh your mind and give the necessary respite and perspective to campus life.
            </p>
            <p>
              We have recently developed a sustainable garden, linking edible planting, wildflower areas and research pods to create a space which is open to staff, students and to the local community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">Student Societies & Debates</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Debating, elocution, Moot Court competitions, and oratory workshops that prepare students thoroughly for real-life courtroom battles and intellectual argumentation.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#005a9c] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">Court Tours & Field Visits</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Annual academic tours to the Supreme Court, High Court, local Tehseels, Police Stations, and Lok Adalats to absorb the indispensable ground-level wisdom of Indian law.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-green-50 text-green-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">Community & Social Outreach</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Self-organized legal awareness camps, community legal aid drives, sports activities, and sustainable campus gardens that serve the local society.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 border border-stone-200 rounded-sm shadow-sm max-w-4xl">
          <h3 className="font-serif text-2xl font-bold text-[#002147] mb-3">
            Accommodation
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            We welcome students from all over India. Our endeavor is to make our campus accessible to all students local or otherwise. We assist you in finding a right place to live so that you can attend college in comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="overflow-hidden rounded-sm shadow border border-stone-300">
            <img src={hmSmall4} alt="College Campus Life" className="w-full h-80 object-cover hover:scale-105 transition duration-500" />
            <div className="p-3 bg-white text-xs font-semibold text-stone-700">Campus Activities & Sports Grounds</div>
          </div>
          <div className="overflow-hidden rounded-sm shadow border border-stone-300">
            <img src={awareness1} alt="Legal Outreach Camp" className="w-full h-80 object-cover hover:scale-105 transition duration-500" />
            <div className="p-3 bg-white text-xs font-semibold text-stone-700">Community Outreach & Legal Awareness Camp</div>
          </div>
        </div>
      </section>
    </div>
  );
}
