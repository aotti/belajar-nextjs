import CardList from "../components/Posts/CardList"
import ViewUserButton from "../components/Posts/ViewUserButton"

const base_url = 'https://jsonplaceholder.typicode.com/posts'

interface IPosts {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts = async () => {
    // get api data
    const response = await fetch(base_url)
    // IPosts[] karna data yang diambil banyak
    const posts: IPosts[] = await response.json()
    // html
    return (
        <>
            <h1> Post Page </h1>
            {posts.map(post => {
                return (
                    <CardList key={post.id}>
                        <p> {post.id} </p>
                        <span> {post.title} </span>
                        <p> {post.body} </p>
                        <ViewUserButton userId={post.userId}/>
                    </CardList>
                )
            })}
        </>
    )
}

export default Posts