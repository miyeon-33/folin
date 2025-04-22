import { useRef, useState } from 'react';

export default function Login() {
  const inputRef = useRef(null);
  const [isVisible, setisVisible] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  function toggleVisibility() {
    setisVisible((prevState) => !prevState);
  }

  function toggleClick() {
    setisClicked((prevState) => !prevState);
  }

  function toggleCheck() {
    setIsChecked((prevState) => !prevState);
  }

  return (
    <main className="bg-[#ebedec]">
      <div className="flex max-w-[384px] m-auto items-center flex-col">
        <img
          src="/images/bhj/folin-logo-b.png"
          alt="folin"
          className="mt-[186px] mb-[64px] w-[186px] h-[56px]"
        />
        <div className="mb-[10px]">
          <form className="w-[380px]">
            <input
              type="email"
              ref={inputRef}
              placeholder="이메일 주소"
              title="이메일 주소"
              className="w-[100%] h-[48px] bg-white border-0 rounded-[8px] p-[12px_16px] hover:outline hover:outline-[#00d48d] hover:outline-[1px] caret-[#00d48d]"
            />
          </form>
        </div>

        <div className="mb-[10px]">
          <form className="w-[380px] relative">
            <input
              type={isVisible ? 'text' : 'password'}
              ref={inputRef}
              placeholder="비밀번호 입력"
              title="비밀번호 입력"
              className=" w-[100%] h-[48px] bg-white border-0 rounded-[8px] p-[12px_16px] hover:outline hover:outline-[#00d48d] hover:outline-[1px] caret-[#00d48d]"
            ></input>
            <button
              type="button"
              onClick={() => {
                toggleVisibility();
                toggleClick();
              }}
              className={`btn absolute top-[25px] right-[10px] transform -translate-y-1/2 btn border-0 w-[28px] h-[28px]  ${
                isVisible
                  ? 'bg-[url(/images/bhj/pass-off.png)] bg-no-repeat bg-center'
                  : 'bg-[url(/images/bhj/pass.png)] bg-no-repeat bg-center'
              }`}
              style={{
                backgroundSize: '25px',
              }}
            >
              <span className="sr-only">비밀번호 보기</span>
            </button>
          </form>

          <button
            type="button"
            className="btn w-[100%] max-w-[384px] h-[48px] border-0 text-[15px] rounded-[4px] bg-[#00D48D] mb-[10px] mt-[10px]"
          >
            <p className="font-bold">로그인</p>
          </button>
        </div>

        <div className="flex justify-between items-center text-[13px] mb-[40px]">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={toggleCheck}
            />
            <span
              className={`inline-block w-[25px] h-[25px] rounded-[50%] bg-no-repeat bg-center mr-[10px] ${
                isChecked
                  ? 'bg-transparent bg-[url("/images/bhj/checked-g.png")]'
                  : 'bg-[#00d48d] bg-[url("/images/bhj/checked.png")]'
              }`}
              style={{ backgroundSize: '15px' }}
            ></span>
          </label>
          <p className="font-bold mr-[130px]">자동로그인</p>

          <p>아이디 찾기</p>
          <span className="m-[0_12px] bg-[#d3d3d3] h-[15px] w-[1px] mt-[3px]"></span>
          <p>비밀번호 찾기</p>
        </div>

        <div className="mb-[40px]">
          <div className="relative w-[100%] max-w-[384px] h-[48px] mb-[10px] rounded-[4px] overflow-hidden">
            <div className="absolute inset-0 bg-[#fee500]"></div>
            <button
              type="button"
              className="relative btn w-[380px] h-full border-0 text-[15px] rounded-[4px]"
            >
              <div
                className="absolute inset-0 bg-no-repeat bg-left left-[20px]"
                style={{
                  backgroundImage: "url('/images/bhj/i-kakao.png')",
                  backgroundSize: '30px',
                }}
              ></div>
              <p className="font-bold">카카오로 3초 만에 시작하기</p>
            </button>
          </div>
        </div>

        <span className="border-white border-t-[1px] w-[100%]"></span>

        <div className="flex">
          <p className="text-[13px] text-[#8e8e8e] mt-[30px]">
            간편 로그인 / 회원가입
          </p>
        </div>

        <div className="mt-[20px] mb-[120px] flex gap-5">
          <button
            type="btn"
            className="btn w-[56px] h-[56px] border-0 rounded-[50%] bg-[#1877f2] relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/images/bhj/facebook.png')",
                backgroundSize: '40px',
              }}
            ></div>
            <span className="sr-only">페이스북</span>
          </button>
          <button
            type="btn"
            className="btn w-[56px] h-[56px] border-0 rounded-[50%] bg-black relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/images/bhj/apple.png')",
                backgroundSize: '40px',
              }}
            ></div>
            <span className="sr-only">페이스북</span>
          </button>
          <button
            type="btn"
            className="btn w-[56px] h-[56px] border-0 rounded-[50%] bg-white relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/images/bhj/email.png')",
                backgroundSize: '40px',
              }}
            ></div>
            <span className="sr-only">페이스북</span>
          </button>
        </div>
      </div>
    </main>
  );
}
