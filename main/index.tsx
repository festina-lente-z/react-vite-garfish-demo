import Garfish from 'garfish';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { GarfishEsModule } from '@garfish/es-module';
import RootComponent from './root'
import './index.css'

Garfish.run({
  basename: '/',
  domGetter: '#micro-app',
  // plugins: [GarfishEsModule()],
  apps: [
      {
        name: 'apple',
        activeWhen: '/apps/apple/',
        entry: '/apps/apple/apple.html',// html入口
        sandbox:false
      },
      {
        name: 'grape',
        activeWhen: '/apps/grape/',
        entry: '/apps/grape/index.html',// html入口
        sandbox: false
      },
      {
        name: 'orange',
        activeWhen: '/apps/orange/',
        entry: '/apps/orange/index.html',// html入口
        sandbox: false
      },
      {
        name: 'pear',
        activeWhen: '/apps/pear/',
        entry: '/apps/pear/index.html',// html入口
        sandbox: false
      },
  ],
  beforeLoad(appInfo) {
    console.log('子应用开始加载', appInfo.name, appInfo);
  },
  afterLoad(appInfo) {
    console.log('子应用加载完成', appInfo);
  },
  // plugins: [GarfishEsModule()],
  errorLoadApp(error, appInfo) {
    console.log('子应用加载异常', appInfo.name);
    console.error(error);
  },
  beforeMount(appInfo, code) {
    console.log('子应用开始渲染', appInfo.name, code);
  },
  afterMount(appInfo, code) {
    console.log('子应用渲染结束', appInfo.name, code);
  },
  beforeEval(appInfo, code) {
    console.log('子应用代码开始执行', appInfo.name);
  },
  afterEval(appInfo, code) {
    console.log('子应用代码执行完成', appInfo.name);
  },
  errorMountApp(error, appInfo) {
    console.log('子应用渲染异常', appInfo.name);
    console.error(error);
  },
  onNotMatchRouter(path) {
    console.log('未匹配到子应用', path);
  }
});

const root = createRoot(document.getElementById('root'))
root.render(<RootComponent/>)