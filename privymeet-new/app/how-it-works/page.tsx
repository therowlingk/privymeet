import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h1 className="text-3xl font-semibold text-white">How PrivyMeet works</h1>

          <div className="mt-8 space-y-8 text-sm leading-7 text-white/70">
            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">1. Problem</h2>
              <p>
                Traditional “find friends at an event” flows require users to upload their full contact list.
                This exposes sensitive relationship data and often gives platforms access to non-matching contacts
                that should never have been revealed in the first place.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">2. PrivyMeet approach</h2>
              <p>
                PrivyMeet uses a private matching model. A user provides a list of contact identifiers,
                and the event has a private attendee dataset. The system computes the overlap and reveals only the matches.
                Non-matching contacts remain hidden, and the full attendee roster is never exposed to the user.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">3. Solana role</h2>
              <p>
                Solana is used as the application ecosystem and wallet layer. In a production implementation,
                event metadata, computation references, permissions, and verification flows can be coordinated on Solana.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">4. Arcium role</h2>
              <p>
                Arcium enables confidential computation over encrypted data. In a full integration,
                PrivyMeet would use Arcium’s client tooling to encrypt or secret-share user inputs, send them into
                an MXE-backed confidential computation flow, and receive only the final private set intersection result.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">5. Privacy benefits</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Only the overlap is revealed.</li>
                <li>Non-matching contacts remain hidden.</li>
                <li>The full event attendee list is not disclosed.</li>
                <li>Private networking becomes possible without mass data leakage.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">6. Current demo mode</h2>
              <p>
                This live demo uses client-side hashing and a mock confidential-computation adapter so the product can be
                tested end-to-end in a browser deployment. The codebase is intentionally structured so the adapter can be
                replaced with real Arcium client integration in the next implementation phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}