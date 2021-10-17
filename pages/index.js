import React, { useEffect } from 'react';
import useFetchMore from '../hooks/useFetchMore';


function HomePage() {
    const { posts, fetchMoreData, fetchData } = useFetchMore();

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <button onClick={fetchMoreData}>Load more posts</button>
            <h3>Total: {posts.length}</h3>
            {
                posts.map((post, index) => {
                    return (
                        <div key={post.id + "_" + index}>
                            <h3>{index + 1}. {post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomePage;