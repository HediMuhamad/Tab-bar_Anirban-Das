import Layout from "./components/layout/layout.component";
import TabBar from "./components/tab-bar-conatiner/tab-bar-conatiner.component";
import TabBarItem from "./components/tab-bar-item/tab-bar-item.component";

import { faHome, faMoneyCheckAlt, faUser } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState();

  return (
    <div className="h-full w-full flex items-center">
      <Layout className={"bg-[#f7ca2f]"}>
        <TabBar>
          <TabBarItem current={current} onClick={setCurrent} icon={faMoneyCheckAlt}>Card</TabBarItem>
          <TabBarItem current={current} onClick={setCurrent} icon={faHome}>Home</TabBarItem>
          <TabBarItem current={current} onClick={setCurrent} icon={faUser}>Account</TabBarItem>
        </TabBar>
      </Layout>
    </div>
  );
}

export default App;
