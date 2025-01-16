import styles from './Post.module.css';
import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src={imageUrl} alt="Imagem do post" />
        <div className={styles['post-text']}>{children}</div>
        <PostComments />
    </div>
);

export default Post;
