import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TitleCard = ({ title, subtitle, level, progress, nextLesson, prevLesson }) => {
  return (
    <Card className="w-full mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          {/* Progress indicator */}
          {progress && (
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
          
          {/* Level badge */}
          {level && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 w-fit">
              Level {level}
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          )}
          
          {/* Navigation buttons */}
          <div className="flex justify-center space-x-4 pt-4">
            {prevLesson && (
              <Link to={prevLesson.url}>
                <Button variant="outline" className="flex items-center space-x-2 border-blue-300 text-blue-700 hover:bg-blue-50">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>
              </Link>
            )}
            
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
  );
};

export default TitleCard;
