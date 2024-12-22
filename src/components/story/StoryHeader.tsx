import * as React from 'react';

interface StoryHeaderProps {
  id: string;
  title: string;
}

export function StoryHeader({ id, title }: StoryHeaderProps) {
  return (
    <gridLayout rows="auto" columns="auto, *" className="mb-4">
      <label col={0} className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm">Story #{id}</label>
      <label col={1} className="text-orange-500 text-2xl font-bold ml-3">{title}</label>
    </gridLayout>
  );
}