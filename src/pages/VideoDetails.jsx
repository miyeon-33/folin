import React from 'react';
import { useParams } from 'react-router';

export default function VideoDetails() {
  const { articleId } = useParams();

  return <div>현재 비디오 ID: {articleId}</div>;
}
