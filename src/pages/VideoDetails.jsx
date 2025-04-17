import React from 'react';
import { useParams } from 'react-router';

export default function VideoDetails() {
  const { articleId } = useParams();

  return (
    <>
      <main className="bg-[#ebedec]">
        <div>현재 비디오 ID: {articleId}</div>
      </main>
    </>
  );
}
