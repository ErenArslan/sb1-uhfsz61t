import { Dialogs } from '@nativescript/core';
import * as React from "react";
import { Header } from './Header';
import { StoryCard } from './StoryCard';
import { HintModal } from './HintModal';
import { stories } from '../data/stories';

export function ScreenOne() {
  const [user, setUser] = React.useState({
    name: "Player",
    level: 1,
    coins: 100,
    score: 0
  });

  const [currentStory, setCurrentStory] = React.useState(stories[0]);
  const [showHint, setShowHint] = React.useState(false);
  const [currentHint, setCurrentHint] = React.useState('');

  const handleShowHint = (type: 'free' | 'premium', hint: string) => {
    if (type === 'premium' && user.coins < 50) {
      Dialogs.alert({
        title: "Not Enough Coins",
        message: "You need 50 coins to reveal a premium hint.",
        okButtonText: "Got it"
      });
      return;
    }
    
    if (type === 'premium') {
      setUser(prev => ({ ...prev, coins: prev.coins - 50 }));
    }
    
    setCurrentHint(hint);
    setShowHint(true);
  };

  const handleSubmitAnswer = (answer: string) => {
    if (!answer.trim()) {
      Dialogs.alert({
        title: "Empty Answer",
        message: "Please type your answer first.",
        okButtonText: "OK"
      });
      return;
    }

    if (answer.toLowerCase() === currentStory.answer.toLowerCase()) {
      const newCoins = user.coins + currentStory.coins;
      const newScore = user.score + 100;
      setUser(prev => ({
        ...prev,
        coins: newCoins,
        score: newScore,
        level: Math.floor(newScore / 300) + 1
      }));
      
      const nextStoryIndex = stories.findIndex(s => s.id === currentStory.id) + 1;
      if (nextStoryIndex < stories.length) {
        Dialogs.alert({
          title: "Correct!",
          message: `You earned ${currentStory.coins} coins! Moving to next story...`,
          okButtonText: "Continue"
        }).then(() => {
          setCurrentStory(stories[nextStoryIndex]);
        });
      } else {
        Dialogs.alert({
          title: "Congratulations!",
          message: "You've completed all stories! Well done!",
          okButtonText: "Finish"
        });
      }
    } else {
      Dialogs.alert({
        title: "Try Again",
        message: "That's not the correct answer. Keep thinking!",
        okButtonText: "OK"
      });
    }
  };

  const handleSkip = () => {
    Dialogs.confirm({
      title: "Skip Story",
      message: "Are you sure you want to skip this story?",
      okButtonText: "Yes, Skip",
      cancelButtonText: "No, Keep Trying"
    }).then(result => {
      if (result) {
        const nextStoryIndex = stories.findIndex(s => s.id === currentStory.id) + 1;
        if (nextStoryIndex < stories.length) {
          setCurrentStory(stories[nextStoryIndex]);
        }
      }
    });
  };

  return (
    <stackLayout className="bg-white h-full">
      <Header user={user} />
      <StoryCard
        story={currentStory}
        onShowHint={handleShowHint}
        onSubmitAnswer={handleSubmitAnswer}
        onSkip={handleSkip}
      />
      <HintModal
        hint={currentHint}
        isVisible={showHint}
        onClose={() => setShowHint(false)}
      />
    </stackLayout>
  );
}