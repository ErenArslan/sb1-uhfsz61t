import * as React from 'react';

interface StoryContentProps {
  title: string;
  content: string;
}

export function StoryContent({ title, content }: StoryContentProps) {
  const [displayText, setDisplayText] = React.useState('');
  
  React.useEffect(() => {
    setDisplayText('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < content.length) {
        setDisplayText(prev => prev + content[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [content]);

  return (
    <stackLayout className="story-card bg-white rounded-2xl p-6 mb-4">
      <label className="text-orange-500 text-2xl font-bold mb-4">{title}</label>
      <scrollView orientation="vertical" className="h-[200]">
        <label className="text-purple-900 text-lg leading-relaxed w-full" textWrap={true}>
          {displayText}
        </label>
      </scrollView>
    </stackLayout>
  );
}