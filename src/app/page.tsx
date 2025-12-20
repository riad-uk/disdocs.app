export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-purple-600/20" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <nav className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-xl font-bold">DisDocs</span>
            </div>
            <a
              href="#download"
              className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
            >
              Download Free
            </a>
          </nav>

          <div className="text-center">
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              The Ultimate Companion for{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Vinyl Collectors
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
              Organize, track, and grow your record collection with ease. Whether you&apos;re a casual listener or a serious crate digger, DisDocs has you covered.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#download"
                className="flex h-14 items-center gap-3 rounded-full bg-white px-8 text-lg font-semibold text-zinc-900 transition-transform hover:scale-105"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for iOS
              </a>
              <a
                href="#features"
                className="flex h-14 items-center rounded-full border border-zinc-700 px-8 text-lg font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
              >
                Learn More
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-500">7-day free trial • No credit card required</p>
          </div>
        </div>
      </header>

      {/* Key Features Section */}
      <section id="features" className="border-t border-zinc-800 bg-zinc-900/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Everything You Need</h2>
            <p className="mt-4 text-lg text-zinc-400">Powerful features designed for vinyl enthusiasts</p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:border-zinc-700">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Scan & Add Instantly</h3>
              <p className="mt-2 text-zinc-400">
                Scan any record&apos;s barcode and DisDocs instantly pulls all details from Discogs – artwork, tracklist, format, genre, and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:border-zinc-700">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Sync with Discogs</h3>
              <p className="mt-2 text-zinc-400">
                Already have a Discogs collection? Connect your account and import your entire library in seconds. Stays in sync automatically.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:border-zinc-700">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Custom Collections</h3>
              <p className="mt-2 text-zinc-400">
                Create unlimited playlists like &quot;For Sale&quot;, &quot;Wishlist&quot;, or &quot;Jazz Essentials&quot;. Fully customizable with colors and descriptions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:border-zinc-700">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Track Market Values</h3>
              <p className="mt-2 text-zinc-400">
                See real-time pricing data from Discogs marketplace. Know what your records are worth and track your collection&apos;s total value.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:border-zinc-700">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Cloud Sync</h3>
              <p className="mt-2 text-zinc-400">
                Access your collection from any device. Your playlists sync securely to the cloud so you never lose your data.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:border-zinc-700">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10">
                <svg className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Export Anywhere</h3>
              <p className="mt-2 text-zinc-400">
                Export your collection to CSV or JSON. Beautiful dark mode interface that&apos;s easy on the eyes during late-night crate digging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Features List */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Packed with Features</h2>
              <p className="mt-4 text-lg text-zinc-400">
                Everything you need to manage your vinyl collection, all in one beautiful app.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-zinc-300">Barcode scanner</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-zinc-300">Discogs integration</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-zinc-300">Unlimited collections</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-zinc-300">Market value tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-zinc-300">Cloud backup & sync</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-zinc-300">Beautiful dark mode</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-zinc-300">Export to CSV/JSON</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-zinc-300">Instant record lookup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-t border-zinc-800 bg-zinc-900/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-zinc-400">Start with a 7-day free trial. No credit card required.</p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Monthly */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <h3 className="text-lg font-semibold text-zinc-400">Monthly</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">$4.99</span>
                <span className="ml-2 text-zinc-400">/month</span>
              </div>
              <p className="mt-4 text-zinc-400">Perfect for trying out all premium features</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">All features included</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">Unlimited collections</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">Cloud sync</span>
                </li>
              </ul>
              <a
                href="#download"
                className="mt-8 block w-full rounded-full border border-zinc-700 py-3 text-center font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
              >
                Start Free Trial
              </a>
            </div>

            {/* Yearly - Popular */}
            <div className="relative rounded-2xl border-2 border-orange-500 bg-zinc-900 p-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold text-white">
                Most Popular
              </div>
              <h3 className="text-lg font-semibold text-zinc-400">Yearly</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">$49.99</span>
                <span className="ml-2 text-zinc-400">/year</span>
              </div>
              <p className="mt-4 text-orange-400 font-medium">2 months free!</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">All features included</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">Unlimited collections</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">Cloud sync</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">Priority support</span>
                </li>
              </ul>
              <a
                href="#download"
                className="mt-8 block w-full rounded-full bg-orange-500 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-400"
              >
                Start Free Trial
              </a>
            </div>

            {/* Lifetime */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <h3 className="text-lg font-semibold text-zinc-400">Lifetime</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">$79.99</span>
                <span className="ml-2 text-zinc-400">one-time</span>
              </div>
              <p className="mt-4 text-zinc-400">Pay once, own forever</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">All features forever</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">All future updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">No subscription</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">Priority support</span>
                </li>
              </ul>
              <a
                href="#download"
                className="mt-8 block w-full rounded-full border border-zinc-700 py-3 text-center font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Start Organizing Your Vinyl Collection Today</h2>
          <p className="mt-4 text-lg text-zinc-400">
            Download DisDocs and try it free for 7 days. No credit card required.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="flex h-16 items-center gap-3 rounded-2xl bg-white px-8 text-lg font-semibold text-zinc-900 transition-transform hover:scale-105"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-zinc-500">Download on the</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              </div>
              <span className="font-bold">DisDocs</span>
            </div>
            <div className="flex gap-6 text-sm text-zinc-400">
              <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="/contact" className="hover:text-white">Support</a>
            </div>
            <p className="text-sm text-zinc-500">© 2024 DisDocs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
