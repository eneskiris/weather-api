import { Outlet } from "react-router-dom";
import Layout from "../layout";

const Root = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default Root;
