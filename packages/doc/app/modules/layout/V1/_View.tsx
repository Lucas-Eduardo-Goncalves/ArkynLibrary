import { Outlet } from "@remix-run/react";
import { LayoutHeader, LayoutNavigation } from "./components";

export function View() {
  return (
    <>
      <LayoutHeader />
      <div className="layout_container">
        <LayoutNavigation />
        <Outlet />
      </div>
    </>
  );
}
