import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import DiaryEdit from './DiaryEdit';
import { StyledButton } from '../styled';
import { DiaryInfo } from '../../../types';
import DiaryRead from './DiaryRead';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { modifyDiary } from '../../../store/diaryList.slice';
import { fetchDiary } from '../../../api/diary';

const DiaryContent = ({ diary_id, date, emoji, title, content }: DiaryInfo) => {
  const [isReadOnly, setIsReadOnly] = useState<boolean>(true);
  const [dTitle, setTitle] = useState<string>(title);
  const [dEmoji, setEmoji] = useState<string>(emoji);
  const [dContent, setContent] = useState<string>(content);

  const auth = useAppSelector((state) => state.auth).value;

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTitle(title);
    setEmoji(emoji);
    setContent(content);
  }, [title, emoji, content]);

  const handleButtonClick = () => {
    if (!isReadOnly) {
      fetchDiary({ userId: auth.name, date: date, title: dTitle, emoji: dEmoji, content: dContent }).then((res) => {
        console.log('fetchDiary:32 ', res);
        if (res.status === 200) {
          dispatch(
            modifyDiary({
              diary_id: res.data.value.diary_id,
              date: res.data.value.date,
              title: res.data.value.title,
              emoji: res.data.value.emoji,
              content: res.data.value.content,
            }),
          );
        } else if (res.status === 400) {
          alert('다이어리 작성에 실패했습니다.');
        } else if (res.status === 403) {
        } else {
          alert('관리자에게 문의해주세요.');
        }
      });
    }
    setIsReadOnly((e) => !e);
  };

  return (
    <div style={{ padding: '10px' }}>
      {isReadOnly ? (
        <DiaryRead title={dTitle} emoji={dEmoji} content={dContent} />
      ) : (
        <DiaryEdit
          title={dTitle}
          handleTitle={setTitle}
          emoji={dEmoji}
          handleEmoji={setEmoji}
          content={dContent}
          handleContent={setContent}
        />
      )}
      <StyledButton style={{ float: 'right', marginTop: '10px' }} onClick={handleButtonClick}>
        {isReadOnly ? '수정' : '저장'}
      </StyledButton>
    </div>
  );
};

export default DiaryContent;
