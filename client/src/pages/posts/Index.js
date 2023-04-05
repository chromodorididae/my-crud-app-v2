import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../../services/postService"

function Index({ user }) {

    const [posts, setPosts] = useState([])
    const [recipes, setAllRecipes] = useState([])

    useEffect(() => {
        async function loadData() {
            const data = await getAllPosts()
            setPosts(data)
            setAllRecipes(data)
        }
        loadData()
    }, [])
    console.log(posts)
    
    const filterBySalad = () => {
        // capitalize salad
        let filteredPosts = recipes.filter(post => post.category === 'Salad')
        //filteredPosts array contains only Salad posts
        setPosts(filteredPosts)
    }

    const filterByBread = () => {
        // capitalize salad
        let filteredPosts = recipes.filter(post => post.category === 'Bread')
        //filteredPosts array contains only Salad posts
        setPosts(filteredPosts)
    }

    const filterByDessert = () => {
        // capitalize salad
        let filteredPosts = recipes.filter(post => post.category === 'Dessert')
        //filteredPosts array contains only Salad posts
        setPosts(filteredPosts)
    }
    const filterByEntree = () => {
        // capitalize salad
        let filteredPosts = recipes.filter(post => post.category === 'Entree')
        //filteredPosts array contains only Salad posts
        setPosts(filteredPosts)
    }


    return (
            <div>
                {/* <h1 style={{textAlign: 'center'}}>Index View</h1> */}
                <h1 style={{textAlign: 'center'}}>Cooking Forum</h1>
                <center><img src="https://media.tenor.com/ZfyUFp30ryMAAAAC/making-ratatouille-two-plaid-aprons.gif" alt="two-plaid-aprons-ratatouille"></img></center>
                <br />

                {/* category filter buttons */}

                <button onClick={filterByEntree}>
                    Entree
                </button>
                
                <button onClick={filterBySalad}>
                    Salad
                </button>

                <button onClick={filterByBread}>
                    Bread
                </button>

                <button onClick={filterByDessert}>
                    Dessert
                </button>


                <div id="posts">

                        {posts?.map((post, index) => 
                            <Link to={`/posts/${post._id}`} key={index}>
                                <div className="a-post">
                                    <strong>{post.subject}</strong>
                                    {/* add category here */}
                                    <br /><br />
                                    <i>Filed Under: {post.category}</i>
                                </div>
                            </Link>
                        )}
            
                    {/* {user && 
                        <Link to="/posts/new">
                            <button>NEW POST</button>
                        </Link>
                    } */}
    
                </div>
            </div>
    )
}

export default Index