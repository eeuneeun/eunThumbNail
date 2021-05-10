import { Button, Checkbox, Form } from "semantic-ui-react";
import ReChart from "./ReChart";
import VictoryLineChart from "./VictoryLineChart";
import VisChart from "./VisChart";


export default function Index() {
  return (
   <div className="chart">
      <div className="inner">
        <h2>라인 차트 리스트</h2>
        <div className="chart-list">
          <ul>
            <li>
              <ReChart />
            </li>
            <li>
              <VictoryLineChart />
            </li>
            <li>
              <VisChart />
            </li>
            <li></li>
          </ul>
        </div>
      </div>
   </div>
  )
}
