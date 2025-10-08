import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ChapterTitleCard({ 
  chapterNumber, 
  chapterTitle, 
  lessonNumber, 
  totalLessons, 
  nextChapter, 
  prevChapter,
  nextLesson,
  prevLesson,
  title,
  subtitle,
  level,
  progress
}) {
  
  return (
    <div className="space-y-4 mb-6">
      {/* Chapter Level Navigation - Green Card with all content */}
      <Card className="w-full bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            {/* Left side - Navigation */}
            <div className="flex space-x-2">
              {prevChapter && (
                <Link to={prevChapter.url}>
                  <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white">
                    <ChevronLeft className="w-4 h-4" />
                    <span>Prev Chapter</span>
                  </Button>
                </Link>
              )}
              {prevLesson && (
                <Link to={prevLesson.url}>
                  <Button variant="outline" className="flex items-center space-x-2 border-green-300 text-green-700 hover:bg-green-50">
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </Button>
                </Link>
              )}
            </div>
            
            {/* Center - Chapter info, title, description and level badge */}
            <div className="text-center flex flex-col items-center space-y-2">
              <h3 className="text-lg font-semibold text-green-800">{chapterTitle}</h3>
              <p className="text-sm text-green-600">Chapter {chapterNumber}</p>
              
              {/* Topic title and description - only show on lesson pages, not chapter pages */}
              {title && lessonNumber > 0 && (
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="text-sm text-gray-600 mt-1">
                      {subtitle}
                    </p>
                  )}
                </div>
              )}
              
              {/* Level badge moved here */}
              {level && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 w-fit">
                  Level {level}
                </div>
              )}
            </div>
            
            {/* Right side - Next button */}
            <div className="flex space-x-2">
              {nextLesson ? (
                <Link to={nextLesson.url}>
                  <Button variant="outline" className="flex items-center space-x-2 border-green-300 text-green-700 hover:bg-green-50">
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              ) : (
                <Button disabled className="flex items-center space-x-2 bg-gray-400 text-gray-600 cursor-not-allowed">
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
              
              {nextChapter && (
                <Link to={nextChapter.url}>
                  <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white">
                    <span>Next Chapter</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

