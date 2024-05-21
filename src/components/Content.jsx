const Content = () => {

    const contentButtonClick = ()=> {
        console.log("i am clicked")
    }

    return <main className="content container">

        <div className="content-sec1">
            <h1>YOU DESERVE THE BEST DESIGNS</h1>
            <p>SANKI IS HERE FOR YOU. YOUR BODY DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR CLOTHES.CHANGING PARAMETERS FOR EVERYDAY CLOTHING.</p>
        

            <div className="content-btn">
                <button onClick={contentButtonClick}>Shop Now</button>
                <button onClick={contentButtonClick} className="secondary-btn">Category</button>
            </div>


            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo"/>
                    <img src="/images/flipkart.png" alt="flipkart-logo"/>
                </div>
            </div>
        </div>

        <div className="content-sec2">
            <img src="/images/brandpost.jpg" alt="image"/>
        </div>

    </main>
}

export default Content