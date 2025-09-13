export default function DirectionsAndLocationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">08 - Directions and Locations</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Spatial relationships and directions in Sanskrit
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Spatial Relationships</h2>
          <p className="text-muted-foreground mb-4">Describing spatial positions and relationships</p>
          <a href="/08-directions_and_locations/spatial_relationships" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Travel Vocabulary</h2>
          <p className="text-muted-foreground mb-4">Travel and movement related vocabulary</p>
          <a href="/08-directions_and_locations/travel_vocabulary" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
      </div>
    </div>
  )
}
