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
            <h1 className="career-title" style={{textAlign: 'center'}}>Tasty Co. Careers</h1>
            </>
            
            {/* button, x.category value - search terms, onclick */}
            {/* <ul>
                {category.map((x, index) =>
                <li>
                    {x.category}
                </li>)}
            </ul> */}

<form class="categories-form">
  <div class="form-group">
  <h3>Personal Information</h3>
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

<div className="job-list" style={{textAlign: 'left', marginLeft: '50px'}}>
            <h3>Desired Position</h3>
            <input type="radio" id="writer" name="position" value="Writer"/>
            <label for="writer">Writer</label><br/>
            <input type="radio" id="chef" name="position" value="Chef"/>
            <label for="chef">Chef</label><br/>
            <input type="radio" id="marketer" name="position" value="Marketer"/>
            <label for="marketer">Marketer</label>
            </div>
            
            <form class="resume-form">
            <div>
            <h3>Resume/CV</h3><label for="exampleFormControlFile1"></label>
                <br />
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
            </div>
            </form>
            <div class="resume-button">
            <button>Submit</button>
            </div>

            {/* postSchema: subject, body, user, category */}
            <Link>
            
            </Link>
</div>
    )
}