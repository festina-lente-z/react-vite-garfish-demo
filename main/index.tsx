import Garfish from 'garfish';
import React from 'react';
import { createRoot } from 'react-dom/client';
import RootComponent from './root'
import './index.css'

Garfish.run({
  basename: '/',
  domGetter: '#micro-app',
  beforeLoad(appInfo) {
    console.log('子应用开始加载', appInfo.name);
  },
  beforeMount(appInfo) {
    console.log('子应用开始渲染', appInfo.name);
  },
  apps: [
      {
        name: 'apple',
        activeWhen: '/apps/apple/',
        entry: '/apps/apple/index.html',// html入口
        sandbox: false
      },
  ],
  afterLoad(appInfo) {
    console.log('子应用加载完成', appInfo);
  }
});

const root = createRoot(document.getElementById('root'))
root.render(<RootComponent/>)