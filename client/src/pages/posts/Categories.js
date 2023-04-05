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
            <h1 style={{textAlign: 'center'}}>Browse by Category</h1>
            </>

            {/* button, x.category value - search terms, onclick */}
            {/* <ul>
                {category.map((x, index) =>
                <li>
                    {x.category}
                </li>)}
            </ul> */}

            <form>
            <div class="form-group">
            <h4>Submit your own recipe</h4>
                <label for="exampleFormControlFile1">upload image here</label>
                <br />
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
            </div>
            </form>
            <button>submit</button>
            

            {/* postSchema: subject, body, user, category */}
            <Link>
            
            </Link>
</div>
    )
}