import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import posts from './data/posts';
import { useState } from 'react';

function App() {
    const [drawnPosts, setPosts] = useState(posts);
    const [postName, setPostName] = useState('Titolo');

    const tags = [];
    drawnPosts.forEach((post) => {
        post.tags.forEach((tag) => {
            !tags.includes(tag) && tags.push(tag);
        });
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            id: posts.length + 1,
            title: postName,
            published: true,
            tags: [],
            image: '',
            content: '',
        };

        setPosts([...drawnPosts, newPost]);
    };

    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="main-title">Il mio blog</h1>
                        </div>
                        <div className="col">
                            <div className="tags-container">
                                {tags.map((tag, i) => {
                                    return <span key={i}>{tag}</span>;
                                })}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={postName}
                                    onChange={(e) => {
                                        setPostName(e.target.value);
                                    }}
                                />
                                <button>Invia</button>
                            </form>
                        </div>
                        {drawnPosts.map((post) => {
                            return (
                                post.published && (
                                    <div className="col-6">
                                        <Card
                                            key={post.id}
                                            title={post.title}
                                            image={post.image}
                                            content={post.content}
                                            tags={post.tags}
                                            published={post.published}
                                        ></Card>
                                    </div>
                                )
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
