import { setupWorker } from 'msw/browser';
import { handlers } from './handlers.js';

// 배열의 요청 핸들러 함수들을 전개연산자로 전달하여 실행
export const worker = setupWorker(...handlers);
