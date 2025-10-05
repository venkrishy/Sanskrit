import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ImageCard = ({ 
  imageSrc, 
  imageAlt, 
  description, 
  placeholder = "Write a sentence describing this image in Sanskrit (transliteration)...",
  onSubmit,
  showSubmitButton = true
}) => {
  const [sanskritInput, setSanskritInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (sanskritInput.trim()) {
      setIsSubmitted(true);
      if (onSubmit) {
        onSubmit(sanskritInput);
      }
    }
  };

  const handleReset = () => {
    setSanskritInput('');
    setIsSubmitted(false);
  };

  return (
    <Card className="w-full mb-6 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                <span className="mr-2">🖼️</span>
                Image
              </h3>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded-lg shadow-md object-contain"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>

          {/* Right side - Split into two parts */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Top part - Description */}
            <div className="flex-1 p-4 border-b border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center">
                <span className="mr-2">📝</span>
                Description
              </h3>
              <div className="prose prose-orange max-w-none">
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>

            {/* Bottom part - Sanskrit Input Form */}
            <div className="flex-1 p-4">
              <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center">
                <span className="mr-2">✍️</span>
                Your Turn
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Write a sentence describing this image in Sanskrit (transliteration):
              </p>
              
              <div className="space-y-3">
                <Textarea
                  value={sanskritInput}
                  onChange={(e) => setSanskritInput(e.target.value)}
                  placeholder={placeholder}
                  className="min-h-[100px] resize-none"
                  disabled={isSubmitted}
                />
                
                {!isSubmitted ? (
                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleSubmit}
                      disabled={!sanskritInput.trim()}
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      Submit
                    </Button>
                    <Button 
                      onClick={() => setSanskritInput('')}
                      variant="outline"
                      className="border-orange-300 text-orange-700 hover:bg-orange-50"
                    >
                      Clear
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <span className="mr-2 text-green-600">✅</span>
                        <span className="font-semibold text-green-800">Great job!</span>
                      </div>
                      <p className="text-sm text-green-700">
                        Your Sanskrit sentence: <span className="font-medium">{sanskritInput}</span>
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        onClick={handleReset}
                        variant="outline"
                        className="border-orange-300 text-orange-700 hover:bg-orange-50"
                      >
                        Try Another
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
