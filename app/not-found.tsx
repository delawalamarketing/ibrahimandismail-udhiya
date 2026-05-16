import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-cream-50">
        <Container size="narrow" className="py-24 lg:py-32 text-center">
          <p className="text-caption font-medium uppercase tracking-[0.08em] text-ink-500">
            404
          </p>
          <h1 className="mt-3 font-serif text-display-lg font-normal text-ink-900">
            Page not found.
          </h1>
          <p className="mt-4 text-body-lg text-ink-700">
            The page you were looking for isn&apos;t here.
          </p>
          <div className="mt-8 inline-flex">
            <Button asChild size="lg">
              <Link href="/">Return home</Link>
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
