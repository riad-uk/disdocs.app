import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - DisDocs",
  description: "Privacy Policy for DisDocs mobile application",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-xl font-bold">DisDocs</span>
            </Link>
            <Link
              href="/"
              className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
            >
              Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-zinc-400">Effective date: January 27, 2025</p>

        <div className="mt-12 space-y-8 text-zinc-300">
          <p>
            DisDocs (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the DisDocs mobile application (the &quot;Service&quot;).
          </p>

          <p>
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for DisDocs is created with the help of the Free Privacy Policy website.
          </p>

          <p>
            We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white">Information Collection And Use</h2>
            <p className="mt-4">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Types of Data Collected</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-zinc-100">Personal Data</h3>
            <p className="mt-2">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Cookies and Usage Data</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-zinc-100">Usage Data</h3>
            <p className="mt-2">
              When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data (&quot;Usage Data&quot;).
            </p>

            <h3 className="mt-6 text-xl font-semibold text-zinc-100">Tracking & Cookies Data</h3>
            <p className="mt-2">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
            </p>
            <p className="mt-4">
              Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
            </p>
            <p className="mt-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            <p className="mt-4">Examples of Cookies we use:</p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>
              <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>
              <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Use of Data</h2>
            <p className="mt-4">DisDocs uses the collected data for various purposes:</p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Transfer Of Data</h2>
            <p className="mt-4">
              Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
            </p>
            <p className="mt-4">
              If you are located outside United Kingdom and choose to provide information to us, please note that we transfer the data, including Personal Data, to United Kingdom and process it there.
            </p>
            <p className="mt-4">
              Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
            </p>
            <p className="mt-4">
              DisDocs will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Disclosure Of Data</h2>
            <h3 className="mt-6 text-xl font-semibold text-zinc-100">Legal Requirements</h3>
            <p className="mt-2">
              DisDocs may disclose your Personal Data in the good faith belief that such action is necessary to:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of DisDocs</li>
              <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>To protect the personal safety of users of the Service or the public</li>
              <li>To protect against legal liability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Security Of Data</h2>
            <p className="mt-4">
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Service Providers</h2>
            <p className="mt-4">
              We may employ third party companies and individuals to facilitate our Service (&quot;Service Providers&quot;), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
            </p>
            <p className="mt-4">
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Analytics</h2>
            <p className="mt-4">
              We may use third-party Service Providers to monitor and analyze the use of our Service.
            </p>
            <h3 className="mt-6 text-xl font-semibold text-zinc-100">Google Analytics</h3>
            <p className="mt-2">
              Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
            </p>
            <p className="mt-4">
              You may opt-out of certain Google Analytics features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy:{" "}
              <a href="https://policies.google.com/privacy?hl=en" className="text-orange-400 hover:text-orange-300 underline" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy?hl=en
              </a>
            </p>
            <p className="mt-4">
              For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:{" "}
              <a href="https://policies.google.com/privacy?hl=en" className="text-orange-400 hover:text-orange-300 underline" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy?hl=en
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Links To Other Sites</h2>
            <p className="mt-4">
              Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p className="mt-4">
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Children&apos;s Privacy</h2>
            <p className="mt-4">
              Our Service does not address anyone under the age of 18 (&quot;Children&quot;).
            </p>
            <p className="mt-4">
              We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Changes To This Privacy Policy</h2>
            <p className="mt-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="mt-4">
              We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the &quot;effective date&quot; at the top of this Privacy Policy.
            </p>
            <p className="mt-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            <p className="mt-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="mt-4">
              By email:{" "}
              <a href="mailto:hello@docfunkist.com" className="text-orange-400 hover:text-orange-300 underline">
                hello@docfunkist.com
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              </div>
              <span className="font-bold">DisDocs</span>
            </Link>
            <div className="flex gap-6 text-sm text-zinc-400">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Support</a>
            </div>
            <p className="text-sm text-zinc-500">© 2024 DisDocs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
