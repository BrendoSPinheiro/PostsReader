import * as S from './styles';

import LightIcon from '../../assets/sun.svg';
import DarkIcon from '../../assets/moon.svg';

export const Header = () => {
  return (
    <S.Navbar>
      <S.ContentContainer>
        <p className="title">Code Soul Blog</p>
        <button className="toggle-theme">
          <img src={DarkIcon} alt="" />
        </button>
      </S.ContentContainer>
    </S.Navbar>
  );
};
