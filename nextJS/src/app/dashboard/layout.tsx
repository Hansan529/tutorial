import React from "react";
import Dashboard from "./page";

type Props = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: Props) {
  return (
    <section>
      <div>
        <h1>Dashboard</h1>
      </div>
      {/* <Dashboard /> */}
      {children}
    </section>
  );
}

export default DashboardLayout;
