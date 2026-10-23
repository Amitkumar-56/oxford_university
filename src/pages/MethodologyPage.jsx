import React from 'react';
import { ChevronRight, MessageSquare, Award, BookOpen, Scale, HeartHandshake, Eye } from 'lucide-react';
import methodologyBanner from '../assets/image/methodology_banner.jpg';

export default function MethodologyPage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const teachingMethods = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Classroom discussion',
      desc: 'The college encourages active classroom discussions to stimulate intellectual curiosity. Students engage in discussions with professors and peers, cultivating strong verbal reasoning, rapid thinking, and the confidence to question and defend legal stances.'
    },
    {
      num: '02',
      icon: Eye,
      title: 'Oral, written and visual training',
      desc: 'The institute focuses on developing the overall communication abilities of students through structured oral, written and visual training. Students are encouraged to improve their legal writing, presentation skills and analytical abilities through class presentations, drafting exercises and audio-visual learning methods. This approach helps students understand complex legal concepts more effectively and express their ideas with clarity and confidence.'
    },
    {
      num: '03',
      icon: BookOpen,
      title: 'Use of written material',
      desc: 'Students are provided with comprehensive written material including case laws, statutes, research articles and academic notes to strengthen their conceptual understanding of law. Regular reading and analysis of legal texts help students develop critical thinking and interpretation skills. The use of well-structured study material also enables students to stay updated with contemporary legal developments.'
    },
    {
      num: '04',
      icon: Scale,
      title: 'Work on Real and Simulated cases for practices',
      desc: 'The college emphasizes practical legal education by engaging students in the study of real and simulated cases. Through case analysis, drafting exercises and problem-based learning, students gain practical exposure to the application of legal principles. This method helps students understand how legal theories operate in real-life situations and prepares them for professional legal practice.'
    },
    {
      num: '05',
      icon: HeartHandshake,
      title: 'Legal Aid and Community Outreach Activities',
      desc: 'The institution actively promotes social responsibility and practical legal awareness through legal aid and community outreach programs. Students participate in legal literacy camps, awareness drives and community service initiatives to educate the public about their rights and duties. These activities not only enhance students’ understanding of law in a social context but also instill a sense of ethics, empathy and commitment towards justice and public service.'
    },
    {
      num: '06',
      icon: Award,
      title: 'Participation in Moot court competitions and various debates',
      desc: 'The college encourages its students to participate in various Moot Court Competitions and debates as it will inculcate strong writing and oral advocacy skills, intellectual flexibility, the ability to function well under pressure and the self confidence necessary to be successful advocates.'
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1a1a]">
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12 border-b border-[#003366]">
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
            <span className="text-[#00c5ff] font-medium">Our Methodology</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Pedagogy & Teaching Philosophy
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Our Methodology
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              SKSIL continually assesses the individual needs of students through kinetic, audio, and visual teaching flexibility.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
              Adaptive Teaching Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] mt-1 mb-4">
              Student-Centered Learning Modalities
            </h2>
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                SKSIL continually assess the individual needs of the students. We recognize that students have many different learning styles such as kinetic, audio, or visual.
              </p>
              <p>
                It is important to use variety and flexibility in teaching methods to reach all learning preferences as students come from a variety of educational and cultural backgrounds. Thus, we have incorporated specialized multi-dimensional teaching methods across all our academic curricula.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-sm overflow-hidden shadow-md border border-stone-300">
              <img
                src={methodologyBanner}
                alt="Our Methodology SKSIL"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="p-3 bg-white border-t border-stone-200 text-xs font-semibold text-stone-700">
                Interactive Legal Pedagogy & Clinical Case Analysis
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingMethods.map((method, idx) => {
            const IconComponent = method.icon;
            return (
              <div key={idx} className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#005a9c] flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-stone-400 font-mono">{method.num}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#002147] mb-2.5">
                    {method.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {method.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

