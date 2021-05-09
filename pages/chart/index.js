import { Button, Checkbox, Form } from "semantic-ui-react";
import ReChart from "./ReChart";

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
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
   </div>
  )
}
