import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../../services/postService"




export default function Categories() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        async function loadData() {
            const data = await getAllPosts()
            setCategory(data)
        }
        loadData()
    }, [])

    console.log(category)
    
    // const uniqueArray = category?.category.filter((value, index, self) => {
    //     return self.indexOf(value) === index;
    //   });

    // console.log(uniqueArray)
    return (
        <div>
            <>
            <h1>Browse by Category</h1>
            display all categories - link to posts with specific category
            </>

            {/* button, x.category value - search terms, onclick */}
            <ul>
                {category.map((x, index) =>
                <li>
                    {x.category}
                </li>)}
            </ul>
            

            {/* postSchema: subject, body, user, category */}
            <Link>
            
            </Link>
</div>
    )
}