import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TitleCard = ({ title, subtitle, level, progress }) => {
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
        </div>
      </CardContent>
    </Card>
  );
};

export default TitleCard;
