import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { getPosts } from '../../service/api';

import * as S from './styles';

type Post = {
  id: number;
  title: string;
  body: string;
};

export const ListPosts = () => {
  const { push } = useHistory();

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getPosts();

      setPosts(response);
    })();
  }, []);

  const summarizePost = (content: string) => {
    return content.substring(0, (content.length - 1) * 0.4);
  };

  const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.substring(1);
  };

  return (
    <S.PageContainer>
      <S.ContentContainer>
        <h1 className="title">Todos os Posts</h1>
        <S.PostsContainer>
          {posts.map((post) => (
            <S.PostItem key={post.id} onClick={() => push(`/posts/${post.id}`)}>
              <h1 className="post-title">{capitalize(post.title)}</h1>
              <p className="post-abstract">{summarizePost(post.body)}...</p>
            </S.PostItem>
          ))}
        </S.PostsContainer>
      </S.ContentContainer>
    </S.PageContainer>
  );
};
