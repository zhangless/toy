import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/ListPage";
import RequireAuth from "./components/RequireAuth";
import { Typography } from "antd";

const { Text } = Typography;
export default function App() {
  return (
    <div>
      张艳爽数值推荐结果产出中，如修改任务条件数值相关配置项，需要再次点击开始计算数值推荐结果产出中，如修改任务条件数值相关配置项，需要再次点击开始计算
      <span style={{ color: "#f00" }}>
        <Text>提前终止计算</Text>
      </span>
    </div>
  );
}
