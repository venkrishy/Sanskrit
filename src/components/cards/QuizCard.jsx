import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const QuizCard = ({ 
  question, 
  options = [], 
  correctAnswer, 
  explanation,
  type = 'multiple-choice' // 'multiple-choice' or 'text-input'
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [userInput, setUserInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    let correct = false;
    
    if (type === 'multiple-choice') {
      correct = selectedAnswer === correctAnswer;
    } else if (type === 'text-input') {
      correct = userInput.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    }
    
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedAnswer('');
    setUserInput('');
    setShowResult(false);
    setIsCorrect(false);
  };

  return (
    <Card className="w-full mb-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-purple-800 flex items-center">
          <span className="mr-2">🧠</span>
          Quiz Time!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Question */}
        <div className="bg-white rounded-lg p-4 border border-purple-200">
          <h4 className="font-semibold text-gray-800 mb-2">Question:</h4>
          <p className="text-gray-700">{question}</p>
        </div>

        {/* Multiple Choice Options */}
        {type === 'multiple-choice' && options.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800">Choose the correct answer:</h4>
            {options.map((option, index) => (
              <label 
                key={index}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedAnswer === option 
                    ? 'bg-purple-100 border-purple-300' 
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="quiz-option"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="mr-3"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}

        {/* Text Input */}
        {type === 'text-input' && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800">Your answer:</h4>
            <Input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full"
            />
          </div>
        )}

        {/* Result Display */}
        {showResult && (
          <div className={`rounded-lg p-4 border ${
            isCorrect 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center mb-2">
              <span className="mr-2 text-xl">
                {isCorrect ? '✅' : '❌'}
              </span>
              <span className={`font-semibold ${
                isCorrect ? 'text-green-800' : 'text-red-800'
              }`}>
                {isCorrect ? 'Correct!' : 'Not quite right.'}
              </span>
            </div>
            {!isCorrect && (
              <p className="text-sm text-gray-600 mb-2">
                Correct answer: <span className="font-medium">{correctAnswer}</span>
              </p>
            )}
            {explanation && (
              <p className="text-sm text-gray-700">{explanation}</p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button 
            onClick={handleSubmit}
            disabled={(!selectedAnswer && type === 'multiple-choice') || (!userInput && type === 'text-input')}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {showResult ? 'Check Again' : 'Submit Answer'}
          </Button>
          {showResult && (
            <Button 
              onClick={handleReset}
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              Try Again
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
