import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Learn Sanskrit</h1>
      <p className="text-xl mb-8">
        Begin your journey into the ancient language of Sanskrit through interactive lessons and quizzes
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/lessons">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Lessons</h2>
            <p className="mb-4">Step-by-step tutorials to learn Sanskrit basics</p>
            <Button>Start Learning</Button>
          </div>
        </Link>
        <Link to="/quiz">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Quiz</h2>
            <p className="mb-4">Test your knowledge with interactive quizzes</p>
            <Button>Take Quiz</Button>
          </div>
        </Link>
        <Link to="/practice">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Practice</h2>
            <p className="mb-4">Practice exercises to reinforce your learning</p>
            <Button>Practice Now</Button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage 