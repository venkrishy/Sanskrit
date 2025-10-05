import TitleCard from '@/components/cards/TitleCard'

export default function NeuterNamePage() {
  return (
    <div className="space-y-6">
      {/* Title Card */}
      <TitleCard 
        title="1.2 - Hello! My Name Is... (The Neuter Name)"
        subtitle="Learning neuter gender names and introductions"
        level="Beginner"
        progress={20}
      />
      
      {/* Content removed */}
    </div>
  )
}