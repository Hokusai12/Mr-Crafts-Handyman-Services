

function AboutPage({updateView}) {

    return (
        <div className="container">
            <div className="row my-5">
                <h3>Who are we?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean.</p>
                <h3>Services?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean.</p>
            </div>
            <div className="my-5 row">
                <h1>FAQ</h1>
                <hr className="col-8 "/>
                <div className="col-10">
                    <details>
                        <summary className="fs-5">Question?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </details>
                    <details>
                        <summary className="fs-5">Another one?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </details>
                    <details>
                        <summary className="fs-5">Another, for real?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </details>
                </div>
            </div>
            <div className="row mt-5">
                <h1>Contact Us</h1>
                <hr className="col-4"/>
                <div className="w-100"></div>
                <div className="col-8">
                    <div className="d-flex gap-5">
                        <div>
                            <p>Phone Number:</p>
                            <p>Email:</p>
                        </div>
                        <div>
                            <p>999-999-9999</p>
                            <p>address@email.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;