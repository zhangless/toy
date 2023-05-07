import { Layout, Spin } from "antd";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import useGlobalStore from "src/store/globalStore";
import useUserStore, { fetchUserInfo } from "src/store/userStore";
import styles from "./index.module.less";
import Login from "../Login";

export default function RequireAuth() {
  const loading = useGlobalStore((state) => state.loading);
  const { isLogin } = useUserStore();
  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <Layout>
      {loading && (
        <div className={styles.loadingBox}>
          <Spin size="large" />
        </div>
      )}
      <Login />
      {isLogin && <Outlet />}
    </Layout>
  );
}
