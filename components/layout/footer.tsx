import Link from "next/link";

export function Footer() {
  return (
    <footer className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-12 md:flex-row">
      <p className="text-center text-sm text-muted-foreground md:text-left">
        Built with Next.js, Tailwind CSS, and Notion API
      </p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link
          href="https://github.com/yourusername/notion-waitlist-app"
          target="_blank"
          className="hover:underline"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}
