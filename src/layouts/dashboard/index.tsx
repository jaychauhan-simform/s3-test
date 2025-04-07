import React from "react";
// import {
//   LaptopOutlined,
//   NotificationOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import {
  RootLayout,
  // MainLayoutHeader,
  MainLayout,
  MainLayoutContent,
  // RootLayoutSider,
  // SiderMenu
} from "./dashboard.styles";

// const items: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1)

//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `Subnav ${key}`,
//       children: Array.from({ length: 4 }).map((_, j) => {
//         const subKey = index * 4 + j + 1
//         return {
//           key: subKey,
//           label: `Option ${subKey}`
//         }
//       })
//     }
//   }
// )

export default function Dashboard() {
  return (
    <RootLayout>
      {/* <RootLayoutSider width={200} collapsible breakpoint="lg">
        <SiderMenu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          items={items}
        />
      </RootLayoutSider> */}
      <MainLayout>
        {/* <MainLayoutHeader>
          <img src="/images/logo.svg" alt="" width={140} height={26} />
        </MainLayoutHeader> */}
        <MainLayoutContent>
          <Outlet />
        </MainLayoutContent>
      </MainLayout>
    </RootLayout>
  );
}
