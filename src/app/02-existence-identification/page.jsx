import TitleCard from '@/components/cards/TitleCard'

export default function ExistenceIdentificationPage() {
  return (
    <div className="space-y-6">
      <TitleCard 
        title="Naming Things & Asking 'Is It There?'"
        subtitle="Existence, identification, and demonstratives"
        level="Beginner"
        progress={0}
      />
      <div className="p-6 bg-white rounded-lg border border-gray-200">
        <p className="text-gray-600">Content coming soon...</p>
      </div>
    </div>
  )
}
