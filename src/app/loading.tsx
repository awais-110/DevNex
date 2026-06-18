export default function Loading() {
  return (
    <div className="min-h-screen px-4 pt-36">
      <div className="mx-auto max-w-7xl animate-pulse space-y-6">
        <div className="h-12 w-2/3 rounded-lg bg-surface" />
        <div className="h-5 w-1/2 rounded bg-surface" />
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => <div key={item} className="h-56 rounded-xl bg-surface" />)}
        </div>
      </div>
    </div>
  );
}
