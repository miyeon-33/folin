import { setupWorker } from 'msw/browser';
import { seriesHandlers } from './seriesHandlers.js';
import { articleHandlers } from '@/mocks/articleHandler.js';
import { seminarHandlers } from '@/mocks/seminarHandler.js';
import { linkerHandlers } from '@/mocks/linkerHandlers.js';
import { plannerHandler } from '@/mocks/plannerHandler.js';
import { postHandlers } from '@/mocks/postHandlers.js';
import { searchHandlers } from '@/mocks/searchHandlers.js';

// 배열의 요청 핸들러 함수들을 전개연산자로 전달하여 실행
export const worker = setupWorker(
  ...seriesHandlers,
  ...articleHandlers,
  ...seminarHandlers,
  ...linkerHandlers,
  ...plannerHandler,
  ...postHandlers,
  ...searchHandlers
);
