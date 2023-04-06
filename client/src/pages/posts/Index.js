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
                <h1 className="main-title" style={{textAlign: 'center'}}>Tasty Co. Cooking Forum</h1>
                <center><img style={{borderRadius: '100px', marginTop: '20px'}} src="https://media.tenor.com/ZfyUFp30ryMAAAAC/making-ratatouille-two-plaid-aprons.gif" alt="two-plaid-aprons-ratatouille"></img></center>
                <br />

                {/* category filter buttons */}
                <div class="index-buttons">
                <button onClick={filterByEntree}>
                    Entrees
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
                </div>


                <div id="posts">

                        {posts?.map((post, index) => 
                            <Link to={`/posts/${post._id}`} key={index}>
                                <div className="a-post">
                                    <strong>{post.subject}</strong>
                                    {/* add category here */}
                                    <br /><br />
                                    <i>
                                    <i class="bi bi-tag"></i>
                                    Filed Under: {post.category}</i>
                                </div>
                            </Link>
                        )}
            
                    {/* {user && 
                        <Link to="/posts/new">
                            <button>NEW POST</button>
                        </Link>
                    } */}
    
                </div>


                    {/* footer goes here */}
                    {/* bootstrap icons */}
                    <footer>
                        <a href="https://www.google.com/">
                            Call Us
                            <br />
                            <i class="bi bi-telephone-fill"></i>
                        </a>
                        <a href="https://www.google.com/">
                            Email Us
                            <br />
                            <i class="bi bi-envelope"></i>
                        </a>
                        <a href="https://www.google.com/">
                            View Our Awards
                            <br />
                            <i class="bi bi-award"></i>
                        </a>
                        <a href="https://www.google.com/">
                            Calendar
                            <br />
                            <i class="bi bi-calendar3"></i>
                        </a>
                        <a href="https://www.google.com/">
                            Bootstrap Icons
                            <br />
                            <i class="bi bi-bootstrap-fill"></i>
                        </a>
                        <a href="https://www.google.com/">
                            Legal
                            <br />
                            <i class="bi bi-file-earmark"></i>
                        </a>
                    </footer>


            </div>
    )
}

export default Index