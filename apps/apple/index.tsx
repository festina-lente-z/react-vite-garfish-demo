import Garfish from 'garfish';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Apple from './apple'
import '../index.css'
import { reactBridge } from '@garfish/bridge-react-v18';

console.log('apple')

// export const provider = reactBridge({
// 	el: '#micro-app',
// 	rootComponent: Apple
// });

export const provider = () => {
	let root = null;
	console.log('provider')
  return {
    render({ basename, dom, store, props }) {
			console.log('basename',basename)
			console.log('dom',dom)
			console.log('store',store)
      const container = dom.querySelector('#apple');
      root = createRoot(container!);
      (root as any).render(<Apple />);
    },
    destroy({ dom }) {
      (root as any).unmount();
    },
  };
}

// const root = createRoot(document.getElementById('app'))
// root.render(<Apple/>)