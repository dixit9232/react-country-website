
import { Header } from "../UI/Header";
import { Footer } from "../UI/Footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
