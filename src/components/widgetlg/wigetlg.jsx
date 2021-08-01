import "./widgetlg.css";

function Widgetlg() {

    const Button = ({ type }) => {
        return <button className={"widgetlgbtn" + type}>Approved</button>
    }
    return (
        <div className="wigetlg">
            <h3 className="widgetlgtitle">Last Transaction</h3>
            <table className="widgetlgtable">
                <tr className="widgetlgtr">
                    <th className="widgetlgth">Customer</th>
                    <th className="widgetlgth">Date</th>
                    <th className="widgetlgth">Amount</th>
                    <th className="widgetlgth">Status</th>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSu5RVwzc8LFlzQ3hbeeGM2JSLw47uwgWaAg&usqp=CAU" alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Janani</span>
                    </td>
                    <td className="widgetlgdate">24 jun 2020</td>
                    <td className="widgetlgamount">₹87,000</td>
                    <td className="widgetlgstatus"><Button type="Approved" /></td>

                </tr>
                <tr className="widgetlgtr">
                    <th className="widgetlgth"></th>
                    <th className="widgetlgth"></th>
                    <th className="widgetlgth"></th>
                    <th className="widgetlgth"></th>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E5SKljnQvLKVwFk1dcOTKNBVGvbyDNl_qA&usqp=CAU" alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Surya</span>
                    </td>
                    <td className="widgetlgdate">04 jun 2020</td>
                    <td className="widgetlgamount">₹44,000</td>
                    <td className="widgetlgstatus"><Button type="Declined" /></td>

                </tr>
                <tr className="widgetlgtr">
                    <th className="widgetlgth"></th>
                    <th className="widgetlgth"></th>
                    <th className="widgetlgth"></th>
                    <th className="widgetlgth"></th>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWJfX_PIaB5Ypr678PvfbOqa7eSGOMst3PA&usqp=CAU" alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Iswarya</span>
                    </td>
                    <td className="widgetlgdate">24 feb 2020</td>
                    <td className="widgetlgamount">₹32,000</td>
                    <td className="widgetlgstatus"><Button type="Pending" /></td>

                </tr><tr className="widgetlgtr">
                    <th className="widgetlgth"></th>
                    <th className="widgetlgth"></th>
                    <th className="widgetlgth"></th>
                    <th className="widgetlgth"></th>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        <img src="https://static.statusqueen.com/dpimages/thumbnail/Stylish_dp-1811.jpg" alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Siva</span>
                    </td>
                    <td className="widgetlgdate">04 jan 2010</td>
                    <td className="widgetlgamount">₹26,000</td>
                    <td className="widgetlgstatus"><Button type="Approved" /></td>

                </tr>
            </table>
        </div>
    )
}

export default Widgetlg;