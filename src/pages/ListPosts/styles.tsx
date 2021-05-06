import styled from 'styled-components';

export const PageContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.main`
  max-width: 828px;
  margin: 50px auto 0;

  h1.title {
    font-size: min(44.8px, 5vw);
    color: #fff;
    text-align: center;
  }
`;

export const PostsContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 0 10px;
`;

export const PostItem = styled.div`
  width: 100%;
  min-height: 170px;

  padding: 24px;

  background: #0f192e;

  border: 3px solid #1a2536;
  border-radius: 11.2px;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  transition: border-color 0.3s;

  & + div {
    margin-top: 24px;
  }

  &:hover {
    border-color: #263957;
  }

  h1.post-title {
    color: #2476e2;
    font-size: 32px;
  }

  p.post-abstract {
    color: #fff;
    font-size: 20px;

    margin-top: 16px;
  }
`;
