import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavigationCard = ({ 
  currentLesson, 
  chapterNumber, 
  lessonNumber, 
  totalLessons,
  chapterTitle,
  nextLesson,
  prevLesson 
}) => {
  return (
    <Card className="w-full mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Home Button */}
          <Link to="/">
            <Button 
              variant="outline" 
              className="flex items-center space-x-2 border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Button>
          </Link>

          {/* Chapter Info */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-800">
              {chapterTitle}
            </h3>
            <p className="text-sm text-blue-600">
              Lesson {lessonNumber} of {totalLessons}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-2">
            {prevLesson && (
              <Link to={prevLesson.url}>
                <Button 
                  variant="outline" 
                  className="flex items-center space-x-2 border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>
              </Link>
            )}
            
            {nextLesson && (
              <Link to={nextLesson.url}>
                <Button 
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NavigationCard;
