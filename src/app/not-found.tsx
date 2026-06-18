import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 pt-24 text-center">
      <div>
        <p className="font-display text-8xl font-extrabold text-primary">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-text-main">This page went missing.</h1>
        <p className="mt-3 text-text-soft">The link may be old, or the page may have moved.</p>
        <Button href="/" className="mt-8">Back to Homepage</Button>
      </div>
    </section>
  );
}
