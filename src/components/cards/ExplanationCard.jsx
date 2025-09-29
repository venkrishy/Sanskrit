import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExplanationCard = ({ title, content, examples, tips }) => {
  return (
    <Card className="w-full mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-green-800 flex items-center">
          <span className="mr-2">📚</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Main content */}
        <div className="prose prose-green max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        
        {/* Examples */}
        {examples && examples.length > 0 && (
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <span className="mr-2">💡</span>
              Examples
            </h4>
            <div className="space-y-2">
              {examples.map((example, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                  <span className="text-sm text-gray-600 font-medium min-w-[60px]">
                    {example.sanskrit}
                  </span>
                  <span className="text-sm text-gray-500">→</span>
                  <span className="text-sm text-gray-800">
                    {example.english}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Tips */}
        {tips && (
          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              Tips
            </h4>
            <p className="text-sm text-yellow-700">{tips}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExplanationCard;
