import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { signUp } from '../../api/auth';
import { MainButton, MdInput } from '../../styled';
import { FONT_SIZE } from '../../constants';

const SignUp = () => {
  const [userId, setUserId] = useState<string>('');
  const [userPw, setUserPw] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (userId === '' || userPw === '') return 0;

    signUp({ userId, userPw, description }).then((res: any) => {
      if (res.status === 200) {
        toast.info('회원가입이 완료되었습니다.');
        navigate('/sign-in');
      } else if (res.status === 400 && res.data.message === '유저 아이디 중복') {
        toast.error('중복된 id입니다.');
      } else {
        toast.warning('관리자에게 문의해주세요.');
      }
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div style={{ fontSize: FONT_SIZE.xl, fontWeight: 700, marginTop: '10%' }}>회원가입</div>
      <MdInput placeholder="아이디" onChange={(e) => setUserId(e.target.value)} />
      <MdInput type="password" placeholder="비밀번호" onChange={(e) => setUserPw(e.target.value)} />
      <MdInput placeholder="한 줄 소개" onChange={(e) => setDescription(e.target.value)} />
      <MainButton onClick={handleButtonClick}>등록하기</MainButton>
    </div>
  );
};

export default SignUp;
