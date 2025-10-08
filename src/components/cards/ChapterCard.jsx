import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ChapterCard({ chapterNumber, chapterTitle, lessonNumber, totalLessons, nextChapter, prevChapter }) {
  return (
    <Card className="w-full mb-3 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex space-x-2">
            {prevChapter && (
              <Link to={prevChapter.url}>
                <Button variant="outline" className="flex items-center space-x-2 border-green-300 text-green-700 hover:bg-green-50">
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev Chapter</span>
                </Button>
              </Link>
            )}
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-800">{chapterTitle}</h3>
            <p className="text-sm text-green-600">Chapter {chapterNumber} • Lesson {lessonNumber} of {totalLessons}</p>
          </div>
          <div className="flex space-x-2">
            {nextChapter && (
              <Link to={nextChapter.url}>
                <Button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white">
                  <span>Next Chapter</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


