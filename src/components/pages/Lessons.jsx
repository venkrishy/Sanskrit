import React from 'react';
import images from '@/lib/images';
import { useState } from "react"
import { Button } from "@/components/ui/button"

const Lessons = () => {
  const [currentLesson, setCurrentLesson] = useState(0)

  // This will be populated with content from your images
  const lessons = [
    {
      title: "Introduction to Sanskrit",
      content: "Lesson content will go here"
    }
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sanskrit Lessons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example of using an image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={images.lessons.lesson1} 
            alt="Lesson 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Lesson 1</h2>
            <p className="text-gray-700">Introduction to Sanskrit</p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-8">Sanskrit Lessons</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{lessons[currentLesson].title}</h2>
          <div className="prose max-w-none mb-6">
            {lessons[currentLesson].content}
          </div>
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentLesson((prev) => prev - 1)}
              disabled={currentLesson === 0}
            >
              Previous Lesson
            </Button>
            <Button
              onClick={() => setCurrentLesson((prev) => prev + 1)}
              disabled={currentLesson === lessons.length - 1}
            >
              Next Lesson
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lessons 