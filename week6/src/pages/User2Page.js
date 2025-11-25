import EmptyData from '../components/EmptyData';
import Title from '../components/Title';
import {useFetchUser} from '../hooks/useFetchUser';
import {Link} from 'react-router-dom';

function User2Page() {
    const post = useFetchUser(2);
    if (post.length === 0) {
        return (
            <EmptyData />
        );
    }
    return (
        <div>
            <h1>유저 2님께서 작성한 글 목록입니다.</h1>
            {post.map((post) => (
            <Title id={post.id} title={post.title}/>
            ))}
            <Link to="/user/1">유저 1님이 작성한 글 목록 보기</Link>
        </div>
    );
}

export default User2Page