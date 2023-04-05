import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";

function New({ user }) {

    let subjectRef = useRef()
    //adding category
    let categoryRef = useRef()
    let bodyRef = useRef()
    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let post = {
            subject: subjectRef.current.value,
            body: bodyRef.current.value,
            //adding category
            category: categoryRef.current.value,
            user
        }
        await createPost(post)
        navigate('/posts')
    }

    return ( 
        <div>
            <h1 style={{textAlign: 'center'}}>New Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nme">Subject:</label><br />
                <input type="text" id="nme" ref={subjectRef} /><br /><br />
                <label htmlFor="clr">Category:</label><br />
                <textarea id="clr" cols="5" rows="1" ref={categoryRef} /><br /><br />
                <label htmlFor="clr">Body:</label><br />
                <textarea id="clr" cols="30" rows="10" ref={bodyRef} /><br /><br />

                <button>Submit</button>
            </form>
        </div>
     );
}

export default New;