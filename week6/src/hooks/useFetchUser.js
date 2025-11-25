import { useEffect, useState } from "react";
export function useFetchUser(userId) {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((response) => response.json())
        .then((json) => setPost(json));
    }, []);
    return post;
}