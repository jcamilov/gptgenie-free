import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 bg-white">
      <nav className="flex justify-center py-5">
        <div className="flex items-center gap-8">
          <a href="/" className="text-gray-800 hover:underline font-medium">
            Home
          </a>
          <a
            href="/super-macros"
            className="text-gray-800 hover:underline font-medium"
          >
            Super Macros
          </a>
          <a
            href="/gpt-genie"
            className="text-gray-800 hover:underline font-medium"
          >
            GPT Genie
          </a>
          <Image
            src="/gptgenie/logo.png"
            alt="GPT Genie Logo"
            width={40}
            height={40}
            priority
          />
        </div>
      </nav>

      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          The power of AI in Google Sheets™
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-[#1a73e8] mb-16">
          Set of Google Sheets™ add-ons that leverage the power of AI. They
          provide chatGPT-like funciontality directly into Google Sheets, no
          more copy paste. No API required.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center text-center p-8">
            <Image
              src="/sm/logoVertical.jpg"
              alt="Super Macros Logo"
              width={300}
              height={100}
              priority
            />
            <p className="my-5 text-[#1a73e8]">
              Generate google macros and Apps Scripts from plain text by using
              AI. Run them in any file. Easy. Fast. Simple. Integrated with
              Gmail™ and Forms™.
            </p>
            <a
              href="/super-macros"
              className="text-gray-800 mb-5 hover:underline"
            >
              Read more
            </a>
            <a
              href="/get-super-macros"
              className="bg-[#4CAF50] text-white px-8 py-3 rounded-md flex flex-col items-center hover:bg-[#43A047] transition-colors"
            >
              Get it now
              <span className="text-sm mt-1">free access</span>
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-8">
            <Image
              src="/gptgenie/logoTop.png"
              alt="GPT Genie Logo"
              width={300}
              height={100}
              priority
            />
            <p className="my-5 text-[#1a73e8]">
              Use your own words to get formulas, generate content, classify,
              translate, extract text and automate complex tasks in your Google
              Sheets™.
            </p>
            <a href="/gpt-genie" className="text-gray-800 mb-5 hover:underline">
              Read more
            </a>
            <a
              href="/get-gpt-genie"
              className="bg-[#4CAF50] text-white px-8 py-3 rounded-md flex flex-col items-center hover:bg-[#43A047] transition-colors"
            >
              Get it now
              <span className="text-sm mt-1">free access</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-20 py-10 bg-[#f9f6f1] flex flex-col items-center gap-4">
        <Image
          src="/gptgenie/gpt-genie-footer-logo.png"
          alt="GPT Genie"
          width={200}
          height={60}
          priority
        />
        <a
          href="mailto:support@thegptgenie.com"
          className="text-gray-800 hover:underline"
        >
          support@thegptgenie.com
        </a>
        <p className="text-gray-600">© 2023 The GPT Genie - Germany</p>
      </footer>
    </main>
  );
}
