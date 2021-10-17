import React, { useState } from 'react'
import { getData } from '../helpers/api';

function useFetchMore() {
    const [posts, setPosts] = useState([]);

    async function fetchData() {
        const result = await getData();
        setPosts(result);
    }

    async function fetchMoreData() {
        const result = await getData();
        setPosts(prev => [ ...prev, ...result])
    }

    return {
        posts,
        fetchData,
        fetchMoreData
    }
}

export default useFetchMore;