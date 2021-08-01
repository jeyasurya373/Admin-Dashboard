import "./featuredinfo.css";


function Featuredinfo() {
    return (
        <div className="featured">
            <div className="featurediteam">
                <span className="feturedtitle">EARNINGS (MONTHLY)</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">₹40,000</span>
                </div>

            </div>
            <div className="featurediteam">
                <span className="feturedtitle">EARNINGS (ANNUAL)</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">₹480,000</span>
                </div>

            </div>
            <div className="featurediteam">
                <span className="feturedtitle">EXPECTED (CTC)</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">₹630,000</span>
                </div>

            </div>
        </div>
    )
}
export default Featuredinfo;
