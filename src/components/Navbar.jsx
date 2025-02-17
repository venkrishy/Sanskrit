import { Link } from "react-router-dom"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-500">
            Sanskrit Learning
          </Link>
          <div className="space-x-4">
            <Link to="/lessons">
              <Button variant="ghost">Lessons</Button>
            </Link>
            <Link to="/quiz">
              <Button variant="ghost">Quiz</Button>
            </Link>
            <Link to="/practice">
              <Button variant="ghost">Practice</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 