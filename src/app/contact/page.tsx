export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h1 className="text-6xl font-bold mb-4">
          Contact
        </h1>

        <p className="text-xl text-white/80 mb-16 max-w-2xl">
          Planning a renovation or a new construction project?
          We are happy to help you choose the perfect windows, doors and architectural systems.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Form */}

          <div className="bg-white rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-black mb-8">
              Send us a message
            </h2>

            <form
  action="https://formsubmit.co/info@kristall-fenster.de"
  method="POST"
  className="space-y-6"
>

              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 rounded-lg border text-black"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-lg border text-black"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-4 rounded-lg border text-black"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Tell us about your project..."
                className="w-full p-4 rounded-lg border text-black"
              />
<input
  type="hidden"
  name="_subject"
  value="New Contact Form Submission"
/>

<input
  type="hidden"
  name="_captcha"
  value="false"
/>

<input
  type="hidden"
  name="_template"
  value="table"
/>
              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-lg hover:bg-zinc-800 transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}

          <div className="space-y-8">

            <div className="bg-white/10 rounded-2xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-5 text-white/90">

                <div>
                  <p className="text-white/60 text-sm mb-1">
                    Address
                  </p>

                  <p>
                    Thomasstraße 11<br />
                    72379 Hechingen<br />
                    Germany
                  </p>
                </div>

                <div>
                  <p className="text-white/60 text-sm mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:+491627742992"
                    className="block hover:text-yellow-400"
                  >
                    +49 162 774 2992
                  </a>

                  <a
                    href="tel:+491747440567"
                    className="block hover:text-yellow-400"
                  >
                    +49 174 744 0567
                  </a>
                </div>

                <div>
                  <p className="text-white/60 text-sm mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:info@kristall-fenster.de"
                    className="hover:text-yellow-400"
                  >
                    info@kristall-fenster.de
                  </a>
                </div>

              </div>

            </div>

            <div className="bg-white/10 rounded-2xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                Opening Hours
              </h2>

              <div className="space-y-4 text-white/90">

                <div>
                  Monday - Friday
                </div>

                <div className="text-2xl font-bold text-yellow-400">
                  07:00 - 18:00
                </div>

                <div className="text-white/60">
                  Saturday & Sunday: By appointment
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}