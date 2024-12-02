import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import posts from './data/posts';

function App() {
    const tags = [];
    posts.forEach((post) => {
        post.tags.forEach((tag) => {
            !tags.includes(tag) && tags.push(tag);
        });
    });

    console.log(tags);

    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="main-title">Il mio blog</h1>
                            <div className="tags-container">
                                {tags.map((tag, i) => {
                                    return <span key={i}>{tag}</span>;
                                })}
                            </div>
                        </div>
                        {posts.map((post) => {
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
