import styled from 'styled-components';

export const Navbar = styled.header`
  width: 100%;
  height: 80px;
  background: #0f192e;
`;

export const ContentContainer = styled.main`
  max-width: 1340px;
  width: 100%;
  height: inherit;

  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p.title {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
  }

  button.toggle-theme {
    width: 50px;
    height: 50px;
    background: #1f335d;

    cursor: pointer;

    border: 0;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.7s;

    &:hover {
      background: #25417e;
    }
  }
`;
