import React from 'react';
import { ChevronRight, ShieldCheck, Lock, Eye, FileText, Database, UserCheck, Bell, Mail, Phone, MapPin } from 'lucide-react';
import privacyBanner from '../assets/image/privacy_banner.jpg';

export default function PrivacyPolicyPage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-[#1a1a1a]">
      {/* Top Hero Banner */}
      <section className="relative bg-[#002147] text-white pt-24 pb-14 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={privacyBanner} alt="Privacy Policy Banner" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-6">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">Privacy Policy</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                Privacy Policy
              </h1>
              <p className="mt-3 text-stone-300 text-sm sm:text-base">
                Sant Kripal Singh Institute of Law (SKSIL), Banda, Uttar Pradesh
              </p>
            </div>
            <div className="lg:col-span-4 flex items-center lg:justify-end">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded px-4 py-3 text-stone-200 text-xs">
                <ShieldCheck className="w-6 h-6 text-[#00c5ff] shrink-0" />
                <span>Committed to student data privacy & digital security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Policy Body */}
          <div className="lg:col-span-8 space-y-8">
            <div className="border-b border-stone-200 pb-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#002147] font-semibold mb-4">
                Privacy Policy for Sant Kripal Singh Institute of Law, Banda
              </h2>
              <p className="text-stone-700 text-base leading-relaxed mb-4">
                At Sant Kripal Singh Institute of Law, Banda, Uttar Pradesh (&quot;the Institute,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot;), we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect the personal information you provide when accessing or using our services, websites, and applications (&quot;Services&quot;).
              </p>
              <p className="text-stone-700 text-base leading-relaxed">
                Please read this policy carefully to understand how we handle your personal information. By accessing or using our Services, you consent to the collection and use of your information as described in this Privacy Policy.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#002147]">Information We Collect</h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">We collect the following types of information:</p>
              <ul className="space-y-3 pl-4 text-stone-700 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#002147] shrink-0">• Personal Information:</span>
                  <span>This may include your name, contact details (email, phone number, address), academic records, date of birth, gender, and other details you may provide through our application process or during your studies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#002147] shrink-0">• Technical Information:</span>
                  <span>We may collect technical data such as your IP address, browser type, device type, and browsing patterns on our website and other online platforms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#002147] shrink-0">• Cookies &amp; Similar Technologies:</span>
                  <span>Our website may use cookies to improve user experience. Cookies are small files stored on your device that help us remember your preferences and track usage patterns.</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#002147]">How We Use Your Information</h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">We use the information we collect for the following purposes:</p>
              <ul className="space-y-2 pl-4 text-stone-700 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#00843D] font-bold">✓</span>
                  <span>To process your applications, provide educational services, and manage your academic records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00843D] font-bold">✓</span>
                  <span>To improve our Services, websites, and user experience.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00843D] font-bold">✓</span>
                  <span>To communicate with you regarding course offerings, events, announcements, and other important updates related to your education.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00843D] font-bold">✓</span>
                  <span>To comply with legal and regulatory requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00843D] font-bold">✓</span>
                  <span>For research and statistical analysis, in order to enhance the quality of our educational programs.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm">3</div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#002147]">Data Sharing and Disclosure</h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                We are committed to protecting your personal information and will not sell, rent, or share your personal data with third parties except in the following circumstances:
              </p>
              <div className="space-y-3 bg-stone-50 border border-stone-200 rounded p-4 text-sm sm:text-base text-stone-700">
                <p>
                  <strong className="text-[#002147]">Service Providers:</strong> We may share your information with trusted third-party vendors or service providers who assist us in delivering our Services, such as hosting, email communication, or technical support. These third parties are obligated to keep your information confidential and are prohibited from using it for any other purpose.
                </p>
                <p>
                  <strong className="text-[#002147]">Legal Requirements:</strong> We may disclose your information if required to do so by law, such as in response to a subpoena, court order, or government investigation.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm">4</div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#002147]">Data Retention</h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, and resolve disputes. After this period, your information will be securely deleted or anonymized.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm">5</div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#002147]">Your Rights</h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                As an individual, you have certain rights regarding your personal information, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#002147]">Access</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">You may request access to the personal information we hold about you.</p>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#002147]">Correction</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">You may request correction of inaccurate or incomplete information.</p>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#002147]">Deletion</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">You may request deletion of your personal data, subject to applicable laws and the Institute&apos;s policies.</p>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#002147]">Objection to Processing</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">You may object to the processing of your personal information, including for direct marketing purposes.</p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm">6</div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#002147]">Data Security</h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                We take the protection of your personal information seriously and implement appropriate technical and organizational measures to safeguard it from unauthorized access, disclosure, alteration, or destruction. While we strive to protect your data, please be aware that no method of electronic transmission or storage is completely secure.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm">7</div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#002147]">Third-Party Links</h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Our Services may contain links to third-party websites. These third-party sites have their own privacy policies, and we are not responsible for the content or practices of these sites. We encourage you to review the privacy policies of any third-party website you visit.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm">8</div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#002147]">Children&apos;s Privacy</h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Our Services are not directed toward children under the age of 13, and we do not knowingly collect personal information from children under this age. If we become aware that we have inadvertently collected information from a child under 13, we will take steps to delete the information as quickly as possible.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm">9</div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#002147]">Changes to This Privacy Policy</h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on our website.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm">10</div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#002147]">Contact Us</h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or how your personal data is handled, please contact us at:
              </p>
              <div className="bg-[#002147] text-white p-6 rounded shadow-sm space-y-3">
                <h4 className="font-serif text-lg font-semibold text-white">Sant Kripal Singh Institute of Law</h4>
                <div className="space-y-2 text-stone-200 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#00c5ff] shrink-0 mt-0.5" />
                    <span>Naraini Road, Banda, Uttar Pradesh – 210001</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00c5ff] shrink-0" />
                    <span>info@sksil.ac.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#00c5ff] shrink-0" />
                    <span>+91 9450224488 / +91 9839445566</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-stone-50 border border-stone-200 rounded p-6">
              <h3 className="font-serif text-xl text-[#002147] font-semibold mb-4 pb-2 border-b border-stone-200">
                Institutional Transparency
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                SKSIL is committed to statutory compliance under UGC regulations, Bar Council of India norms, and data protection practices.
              </p>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleNav('rules')}
                  className="w-full text-left p-3 bg-white border border-stone-200 hover:border-[#002147] rounded transition flex items-center justify-between text-xs sm:text-sm font-medium text-stone-800"
                >
                  <span>Student Code of Conduct &amp; Rules</span>
                  <ChevronRight className="w-4 h-4 text-[#002147]" />
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('accreditation')}
                  className="w-full text-left p-3 bg-white border border-stone-200 hover:border-[#002147] rounded transition flex items-center justify-between text-xs sm:text-sm font-medium text-stone-800"
                >
                  <span>BCI Recognition &amp; Affiliation</span>
                  <ChevronRight className="w-4 h-4 text-[#002147]" />
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="w-full text-left p-3 bg-white border border-stone-200 hover:border-[#002147] rounded transition flex items-center justify-between text-xs sm:text-sm font-medium text-stone-800"
                >
                  <span>Grievance &amp; Contact Desk</span>
                  <ChevronRight className="w-4 h-4 text-[#002147]" />
                </button>
              </div>
            </div>

            <div className="bg-[#002147]/5 border border-[#002147]/15 rounded p-6">
              <h4 className="font-serif text-lg text-[#002147] font-semibold mb-2">Need Admission Assistance?</h4>
              <p className="text-stone-600 text-xs sm:text-sm mb-4 leading-relaxed">
                Admissions are open for 5-Year B.A. LL.B. and 3-Year LL.B. programs. Fill the application form or visit our campus.
              </p>
              <button
                type="button"
                onClick={() => handleNav('apply')}
                className="w-full bg-[#00843D] hover:bg-[#006e33] text-white text-xs font-semibold py-2.5 rounded transition uppercase tracking-wider"
              >
                Apply Online 2026–27
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
