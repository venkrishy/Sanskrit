import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TopicCard({ currentLesson, lessonNumber, totalLessons, nextLesson, prevLesson }) {
  return (
    <Card className="w-full mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex space-x-2">
            {prevLesson && (
              <Link to={prevLesson.url}>
                <Button variant="outline" className="flex items-center space-x-2 border-blue-300 text-blue-700 hover:bg-blue-50">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>
              </Link>
            )}
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-800">{currentLesson}</h3>
            <p className="text-sm text-blue-600">Lesson {lessonNumber} of {totalLessons}</p>
          </div>
          <div className="flex space-x-2">
            {nextLesson ? (
              <Link to={nextLesson.url}>
                <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white">
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
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


