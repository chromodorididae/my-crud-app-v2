export default function Shop () {
    return (
        <div>
            <h1 class="shop-title" style={{textAlign: 'center'}}>Place an Order</h1>

            <p style={{textAlign: 'center'}}>
                Webshop launching soon. Sign up below to receive notifications.
            </p><center>
            <img class="shop-gif" src="https://www.getstreamline.com/hs-fs/hubfs/website%20build%20gif%201.gif?width=446&name=website%20build%20gif%201.gif" alt="streamlineblog">

            </img></center>
            <br />
            <div class="container">
                <form class= "form-inline" method="post">
                <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Your Email"/>
                </div>
                <div class="form-group"><button class="btn btn-primary" type="button">Subscribe </button></div>

                </form>
            </div>
            
        </div>
    )
}