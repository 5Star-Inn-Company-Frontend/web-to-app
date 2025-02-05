import "./plan.scss";

export function Plan() {
    return (
        <div className="plan">
            <div className="bigContainer">
                <div className="mainContainer">
                    <div className="leftContainer">
                        <div className="center">
                            <div className="header">
                                <h1>Plan</h1>
                            </div>
                            <div className="content">
                                <h6>Application</h6>
                                <p className="pLicense">5star Free License</p>

                                <div className="box">
                                    <div className="boxTop">
                                        <h6>Free Plan </h6>
                                        <button>Add License</button>
                                    </div>
                                    <h1>
                                        #0.00 <span>one-time payment</span>
                                    </h1>
                                    <p>
                                        A paid license is required to remove Median branding and to <br />
                                        access advanced functionality including the JavaScript Bridge.
                                    </p>
                                </div>
                            </div>
                            <div className="content">
                                <p className="pLicense">5star Free License</p>

                                <div className="box">
                                    <div className="boxTop">
                                        <h6>Gold Plan </h6>
                                        <button>Add License</button>
                                    </div>
                                    <h1>
                                        #10,000.00 <span>one-time payment</span>
                                    </h1>
                                    <p>
                                        A paid license is required to remove Median branding and to <br />
                                        access advanced functionality including the JavaScript Bridge.
                                    </p>
                                </div>
                            </div>
                            <div className="content">
                                <p className="pLicense">5star Free License</p>

                                <div className="box">
                                    <div className="boxTop">
                                        <h6>Premium Plan </h6>
                                        <button>Add License</button>
                                    </div>
                                    <h1>
                                        #20,000.00 <span>one-time payment</span>
                                    </h1>
                                    <p>
                                        A paid license is required to remove Median branding and to <br />
                                        access advanced functionality including the JavaScript Bridge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
