import * as React from 'react';
import { Story } from '../types/Story';
import { StoryContent } from './story/StoryContent';

interface StoryCardProps {
  story: Story;
  onShowHint: (type: 'free' | 'premium', hint: string) => void;
  onSubmitAnswer: (answer: string) => void;
  onSkip: () => void;
}

export function StoryCard({ story, onShowHint, onSubmitAnswer, onSkip }: StoryCardProps) {
  const [answer, setAnswer] = React.useState('');
  
  return (
    <scrollView className="bg-white flex-grow">
      <stackLayout className="p-4">
        {/* Story Content */}
        <StoryContent title={story.title} content={story.content} />
        
        {/* Hint Buttons */}
        <gridLayout rows="auto" columns="*, *" className="mb-6">
          <button 
            col={0}
            className="bg-orange-500 text-white p-2 rounded-xl m-1"
            text="Free Hint"
            onTap={() => onShowHint('free', story.freeHint)}
          />
          <button 
            col={1}
            className="bg-purple-600 text-white p-2 rounded-xl m-1"
            text="Premium Hint (50 coins)"
            onTap={() => onShowHint('premium', story.premiumHints[0])}
          />
        </gridLayout>

        {/* Answer Input and Buttons */}
        <stackLayout className="story-card bg-white rounded-2xl p-6">
          <label className="text-purple-900 text-lg font-bold mb-4">Your Answer</label>
          <textField
            className="bg-purple-50 p-4 rounded-xl text-purple-900 text-lg mb-4"
            hint="Type your answer here..."
            text={answer}
            onTextChange={(e) => setAnswer(e.value)}
          />

          <gridLayout rows="auto" columns="3*, *" className="mt-4">
            <button 
              col={0}
              className="bg-purple-600 text-white p-3 rounded-xl m-1"
              text="Submit Answer"
              onTap={() => onSubmitAnswer(answer)}
            />
            <button 
              col={1}
              className="bg-gray-500 text-white p-3 rounded-xl m-1"
              text="Skip"
              onTap={onSkip}
            />
          </gridLayout>
        </stackLayout>
      </stackLayout>
    </scrollView>
  );
}