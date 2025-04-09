import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from '@tanstack/react-query';

async function enableMocking() {
  // 환경변수로 개발중일때만 서비스워커 활성화
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }

  const { worker } = await import('./mocks/browser.js');

  // 서비스워커가 동작하여 요청을 가로챌 준비가 되면 완료된 프라미스를 반환
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

// 쿼리클라이언트 인스턴스 생성
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // onSuccess: (data) => console.log(data),
    // onError: (error) => console.error(`Something went wrong: ${error.message}`),
  }),
});

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
});
