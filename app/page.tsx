import Link from "next/link";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/forms/waitlist-form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center border container mx-auto rounded-xl overflow-hidden">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-accent px-4">
        <div className="max-w-xl mx-auto space-y-6 lg:space-y-12">
          <div className="flex flex-col justify-center gap-4 text-center items-center">
            <h6 className="text-sm">Launching Soon</h6>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-balance">
              Join our waitlist for early access
            </h1>
            <p className="text-balance text-muted-foreground md:text-xl">
              Be the first to know when we launch our new platform powered by
              the Notion API.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-xl border bg-background p-6 shadow-sm">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold">Reserve Your Spot</h2>
              <p className="text-sm text-muted-foreground">
                Enter your email below to join our waitlist.
              </p>
            </div>
            <WaitlistForm />

            <div className="flex -space-x-3 mt-4">
              {Array.from({ length: 4 }, (_, i) => (
                <img
                  key={i}
                  className="size-10 bg-primary ring-muted rounded-full ring-2"
                  src={`https://i.pravatar.cc/150?img=${i}`}
                  alt={`User ${i + 1}`}
                  width={40}
                  height={40}
                />
              ))}
              <div className="bg-secondary text-muted-foreground ring-background hover:bg-secondary hover:text-foreground flex size-10 items-center justify-center rounded-full text-xs ring-2">
                +3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full  py-12 md:py-20 bg-background px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Why join our waitlist?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers powerful integrations with Notion and more.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-12">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="rounded-full bg-accent p-4">
              <svg
                className="size-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Intuitive Interface</h3>
            <p className="text-sm text-muted-foreground text-balance">
              A clean, simple interface that&#39;s easy to use and navigate.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="rounded-full bg-accent p-4">
              <svg
                className="size-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 19a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z" />
                <path d="M11 16h4" />
                <path d="M11 13h3" />
                <path d="M11 10h4" />
                <path d="M15 3v5a2 2 0 0 1-2 2h-3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Notion Integration</h3>
            <p className="text-sm text-muted-foreground text-balance">
              Seamlessly integrate with your Notion databases for powerful
              automation.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="rounded-full bg-accent p-4">
              <svg
                className="size-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Customizable</h3>
            <p className="text-sm text-muted-foreground text-balance">
              Tailor the experience to your specific needs and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-20 bg-accent px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center max-w-md mx-auto">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to get started?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
              Join our waitlist today and be among the first to experience our
              platform.
            </p>
          </div>

          <Button asChild className="w-full" size="lg">
            <Link href="#top">Join Waitlist</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
