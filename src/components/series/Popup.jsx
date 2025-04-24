// components /series /Popup.jsx
import close from '@/assets/images/rhr/close.png';
import facebook from '@/assets/images/rhr/facebook.png';
import kakao from '@/assets/images/rhr/kakao.png';
import twitter from '@/assets/images/rhr/twitter.png';
import url from '@/assets/images/rhr/url.png';
import { useEffect, useState } from 'react';

export default function Popup({ isPopupVisible, setPopupVisible }) {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // 컴포넌트가 마운트될 때 현재 URL 가져오기
    setCurrentUrl(window.location.href);
  }, []);

  // URL 복사 함수
  const copyUrlToClipboard = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        showToastMessage('링크가 복사되었습니다.');
      })
      .catch((err) => {
        console.error('URL 복사 실패:', err);
      });
  };

  const showToastMessage = (message) => {
    const toast = document.createElement('div');
    toast.textContent = message;
    Object.assign(toast.style, {
      position: 'fixed',
      left: '50%',
      top: '50%',
      width: '288px',
      height: '70px',
      transform: 'translate(-50%, -50%)',
      opacity: '0',
      background: '#111111',
      color: 'white',
      fontSize: '13px',
      fontWeight: 'bold',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      borderRadius: '6px',
      transition: 'opacity 0.5s',
      zIndex: '10000',
    });
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '1';
    }, 10);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    }, 1500);
  };

  return (
    <div className="fixed flex top-0 left-0 w-full h-full z-9999 bg-black/80 items-center justify-center">
      <div className="fixed w-[288px] h-[199px] bg-white z-50 p-[12px] rounded-[6px] items-center">
        <button
          className="flex pt-[4px] px-[4px] ml-auto items-center right-[12px]"
          onClick={() => {
            setPopupVisible(false);
          }}
        >
          <img src={close} alt="닫기" className="w-[24px] h-[24px]" />
        </button>
        {!isPopupVisible ? setPopupVisible(true) : null}
        <h4 className="text-center font-bold mb-[16px]">공유하기</h4>
        <div className="flex justify-center items-center gap-[16px] mb-[24px]">
          <button
            type="button"
            className="bg-transparent"
            onClick={() =>
              window.open(
                'https://www.facebook.com/?locale=ko_KR',
                'facebook',
                'width=430, height=500, location=no, status=no, scrollbars=yes'
              )
            }
          >
            <img src={facebook} alt="페이스북" className="w-[48px] h-[48px]" />
          </button>
          <button
            type="button"
            className="bg-transparent"
            onClick={() =>
              window.open(
                'https://www.kakaocorp.com/page/service/service/KakaoTalk',
                'facebook',
                'width=430, height=500, location=no, status=no, scrollbars=yes'
              )
            }
          >
            <img src={kakao} alt="카카오톡" className="w-[48px] h-[48px]" />
          </button>
          <button
            type="button"
            className="bg-transparent"
            onClick={() =>
              window.open(
                'https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoia28ifQ%3D%3D%22%7D',
                'twitter',
                'width=430, height=500, location=no, status=no, scrollbars=yes'
              )
            }
          >
            <img src={twitter} alt="트위터" className="w-[48px] h-[48px]" />
          </button>
        </div>
        <div className="w-full h-[32px] flex justify-between items-center py-[4px] px-[8.5px] bg-[#f7f7f7]">
          <input
            type="url"
            name="website"
            value={currentUrl}
            className="w-[90%] bg-transparent text-[14px] leading-[24px] text-ellipsis text-[#111]"
          />
          <button
            type="button"
            className="bg-transparent flex items-center"
            onClick={copyUrlToClipboard}
          >
            <img src={url} alt="url복사" className="w-[24px] h-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
