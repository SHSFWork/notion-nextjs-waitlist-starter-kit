import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="mx-auto px-4 py-8 container flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        NotionWaitlist
      </Link>

      <nav className="flex items-center gap-4">
        <Button asChild variant="ghost" className="hidden sm:inline-flex">
          <Link
            href="https://github.com/yourusername/notion-waitlist-app"
            target="_blank"
          >
            GitHub
          </Link>
        </Button>
        <Button asChild>
          <Link href="/">Join Waitlist</Link>
        </Button>
      </nav>
    </header>
  );
}
