import React from 'react';
// 路由懒加载
const Home = React.lazy(() => import('../pages/Home'));
const Form = React.lazy(() => import('../pages/Form'));
const NotFound = React.lazy(() => import('../components/NotFount'));

export default [
  {
    path: '/',
    exact: true,
    Component: Home,
    requiresAuth: false,
  },
  {
    path: '/Form',
    Component: Form,
    requiresAuth: false,
  },
  // {
  //   path: '/accountInfo',
  //   Component: AccountInfo,
  //   requiresAuth: true,
  //   routes: [
  //     { path: '/accountInfo', Component: Profile, requiresAuth: true, exact: true, }, // 账户信息
  //     { path: '/accountInfo/accountSettings', Component: AccountSetting, requiresAuth: true }, // 账户信息设置
  //     { path: '/accountInfo/changePassword', Component: ChangePassword, requiresAuth: true }, // 密码修改
  //     // { path: '/accountInfo/privacyAndSecurity', Component: PrivacyAndSecurity, requiresAuth: true }, // 隐私协议&用户政策
  //     { path: '/accountInfo/notifications', Component: Notification, requiresAuth: true }, // 消息列表
  //     { path: '/accountInfo/myOrder', Component: MyOrder, requiresAuth: true }, // 订单列表
  //     { path: '/accountInfo/testDriveList', Component: TestDriveList, requiresAuth: true }, // 预约试驾列表
  //   ]
  // },
  {
    path: '*',
    Component: NotFound,
    requiresAuth: false
  }
];