import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import membership from '@/assets/images/icon/membership.png';
import marrow from '@/assets/images/icon/membershiparrow.png';
import { Link } from 'react-router';

export default function Membership() {
  const [isFixed, setIsFixed] = useState(false);
  const [isAboveFooter, setIsAboveFooter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const footerHeight = 320;

      if (scrollY > 360) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      // footer가 올라올때
      if (scrollY + windowHeight >= documentHeight - footerHeight) {
        setIsFixed(false);
        // setIsAboveFooter(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    navigate('/introduction');
  };

  return (
    <Link to={'/introduction'}>
      <div
        className={`${
          isFixed
            ? 'fixed bottom-[4px] z-500 left-[50%] transform -translate-x-[50%] '
            : 'static pt-[120px] '
        }
      max-sm:top-[8px] px-[24px] w-full max-sm:px-[8px] cursor-pointer`}
        onClick={handleClick}
      >
        <div className="max-w-[1200px] h-[90px] bg-point1 mx-auto rounded-[6px] py-[18px] px-[2px]">
          <img
            src={membership}
            alt="membership"
            className="w-[204px] block mx-auto"
          />
          <div className="flex items-center justify-center">
            <p className="mr-[9.5px] font-bold text-gray-600">
              지금 첫 달 무료로 커리어 성장하기
            </p>
            <img src={marrow} alt="arrow" className="w-[41px] h-[14px]" />
          </div>
        </div>
      </div>
    </Link>
  );
}
