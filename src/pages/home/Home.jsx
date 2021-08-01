
import Chart from "../../components/chart/chart"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import "./home.css";
import { userdata } from "../../dummydata"
import Widgetlg from "../../components/widgetlg/wigetlg";
import Widgetsm from "../../components/widgetsm/wigetsm";

export default function Home() {
    return (
        <div className="home">
            <Featuredinfo />
            <div className="homewidgets"></div>
            <Chart data={userdata} title="Earnings Overview " grid dataKey="Salary" />
            <div className="homewidgets">
                <Widgetsm />
                <Widgetlg />

            </div>

        </div>
    )
}
