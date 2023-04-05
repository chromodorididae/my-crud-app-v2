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
            <h1 style={{textAlign: 'center'}}>Tasty Co. Careers</h1>
            <h6 style={{textAlign: 'center', fontStyle: 'italic'}}>bootstrap form</h6>
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
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Example St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <br />
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Sign up for news and announcements
      </label>
    </div>
  </div>
</form>
            
            <form>
            <div>
            <h4>Resume/CV</h4><label for="exampleFormControlFile1"></label>
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