import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { useState } from "react"
import { curriculumData } from "../data/curriculum"

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-orange-600 sanskrit-text">
            संस्कृतम् (Sanskrit Learning)
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/">
              <Button variant={isActive('/') ? "default" : "ghost"}>
                Home
              </Button>
            </Link>
            <Link to="/curriculum">
              <Button variant={isActive('/curriculum') ? "default" : "ghost"}>
                Curriculum
              </Button>
            </Link>
            <Link to="/quiz">
              <Button variant={isActive('/quiz') ? "default" : "ghost"}>
                Quiz
              </Button>
            </Link>
            <Link to="/practice">
              <Button variant={isActive('/practice') ? "default" : "ghost"}>
                Practice
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link to="/curriculum" className="block px-3 py-2 rounded-md text-base font-medium">
                Curriculum
              </Link>
              <Link to="/quiz" className="block px-3 py-2 rounded-md text-base font-medium">
                Quiz
              </Link>
              <Link to="/practice" className="block px-3 py-2 rounded-md text-base font-medium">
                Practice
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 