import React, { useState } from "react"
import { useRouter } from 'next/router'
import { Input, Label, Menu } from "semantic-ui-react";


export default function Gnb(props) {
  const isOpenGnb = props.isOpenGnb;
  const setIsOpenGnb = props.setIsOpenGnb;

  console.log(isOpenGnb)

  const router = useRouter();
  const [ activeItem , setActiveItem ] = useState(null);

  function pageLink(target){
    setIsOpenGnb(false);
    setActiveItem(target);
    router.push("/" + target);
  }


  return (
    <div className={`gnb-wrap ${isOpenGnb ? "active" : ""}`}>
      <div className="gnb-bg" onClick={()=>setIsOpenGnb(false)}></div>
      <div className="gnb">
        <div className="title-wrap">
          <h2>은은님 안녕하세요!</h2>
        </div>

        <Menu vertical>
          <Menu.Item
            name="index"
            active={activeItem === "index"}
            onClick={()=>pageLink("index")}
          >
            <Label color="teal">1</Label>
            Main
          </Menu.Item>

          <Menu.Item
            name="tumbNail"
            active={activeItem === "tumbNail"}
            onClick={()=>pageLink("tumbNail")}
          >
            <Label>51</Label>
            TumbNail
          </Menu.Item>

          <Menu.Item
            name="chart"
            active={activeItem === "chart"}
            onClick={()=>pageLink("chart")}
          >
            <Label>1</Label>
            Chart
          </Menu.Item>
          <Menu.Item>
            <Input icon="search" placeholder="Search Items..." />
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}
