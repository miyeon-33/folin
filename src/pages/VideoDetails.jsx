import React from 'react';
import { useParams } from 'react-router';

export default function VideoDetails() {
  const { articleId } = useParams();

  return (
    <>
      <main className="bg-[#ebedec]">
        <div className="flex justify-center items-center max-w-[1200px] pt-[40px]">
          현재 비디오 ID: {articleId}
          <div className="">
            <h2 className="font-bold">후기</h2>
            <p>0개</p>
          </div>
        </div>
      </main>
    </>
  );
}
