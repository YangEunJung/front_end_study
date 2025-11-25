import EmptyData from '../components/EmptyData';
import Title from '../components/Title';
import {useFetchUser} from '../hooks/useFetchUser';
import {Link} from 'react-router-dom';

function User1Page() {
    const posts = useFetchUser(1);
    if (posts.length === 0) {
        return (
            <EmptyData />
        );
    }
    return (
        <div>
            <h1>유저 1님께서 작성한 글 목록입니다.</h1>
            {posts.map((post) => (
            <Title key={post.id} title={post.title}/>
            ))}
            <Link to="/user/2">유저 2님이 작성한 글 목록 보기</Link>
        </div>
    );
}
export default User1Page