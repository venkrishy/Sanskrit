export default function BasicNumbersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Basic Numbers</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Numbers 1-10 and basic counting in Sanskrit
        </p>
      </div>
      
      <div className="prose max-w-none">
        <p>This lesson covers numbers 1-10 and basic counting in Sanskrit.</p>
        <p>Content will be loaded from: <code>curriculum/numbers/basic_numbers.md</code></p>
      </div>
    </div>
  )
}
