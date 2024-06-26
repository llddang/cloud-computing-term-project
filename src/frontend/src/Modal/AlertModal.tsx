import { VscChromeClose } from 'react-icons/vsc';
import * as S from './styled';
import { MainButton } from '../styled';

export interface AlertModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  message: string;
}

const AlertModal = ({ open, handleClose, title, message }: AlertModalProps) => {
  return (
    <S.ModalWrapper style={{ display: `${open ? 'block' : 'none'}` }} onClick={handleClose}>
      <S.ModalContentLayout>
        <S.ModalContentTitle>
          {title}
          <VscChromeClose onClick={handleClose} />
        </S.ModalContentTitle>
        <S.ModalContentMessage>{message}</S.ModalContentMessage>
        <S.ModalContentFoot>
          <MainButton onClick={handleClose}>확인</MainButton>
        </S.ModalContentFoot>
      </S.ModalContentLayout>
    </S.ModalWrapper>
  );
};

export default AlertModal;
