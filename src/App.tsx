function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-4 bg-surface-default p-8 font-sans">
      <h1 className="text-2xl font-bold text-text-default">Design Sandbox</h1>
      <p className="text-lg text-text-default">
        If you can see this, your setup is working.
      </p>
      <p className="text-text-muted">
        Next, open{' '}
        <code className="rounded-sm bg-surface-subtle px-2 py-1 font-mono text-sm">
          docs/module-02-first-prototype.md
        </code>{' '}
        to build your first prototype.
      </p>

      {/* A few token-driven elements, just to confirm the pipeline works.
          These colors, spacing, and radii all come from tokens/tokens.json. */}
      <div className="mt-4 flex gap-2">
        <div className="h-12 w-12 rounded-md bg-brand-primary" />
        <div className="h-12 w-12 rounded-md bg-brand-primary-hover" />
        <div className="h-12 w-12 rounded-md bg-feedback-success" />
        <div className="h-12 w-12 rounded-md bg-feedback-warning" />
        <div className="h-12 w-12 rounded-md bg-feedback-danger" />
      </div>
    </main>
  )
}

export default App
