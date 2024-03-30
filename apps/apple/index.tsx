import Garfish from 'garfish';
import React from 'react';
import { createRoot } from 'react-dom/client';
import RootComponent from './root'
import '../index.css'
import { reactBridge } from '@garfish/bridge-react-v18';

console.log('apple')

export const provider = reactBridge({
	el: '#sub-app',
	rootComponent: RootComponent,
	errorBoundary: (error) => {
		console.error(error)
		return <div>error</div>
	}
});


// export const provider = () => {
// 	let root = null;
// 	console.log('provider')
//   return {
//     render({ basename, dom, store, props }) {
// 			console.log('basename',basename)
// 			console.log('dom',dom)
// 			console.log('store',store)
//       const container = dom.querySelector('#sub-app');
//       root = createRoot(container!);
//       (root as any).render(<RootComponent basename={basename} />);
//     },
//     destroy({ dom }) {
//       (root as any).unmount();
//     },
//   };
// }
// ignore eslint
// if (window.__GARFISH__ && typeof __GARFISH_EXPORTS__ === "object" && __GARFISH_EXPORTS__) {
//     __GARFISH_EXPORTS__.provider = provider;
// }

// const root = createRoot(document.getElementById('app'))
// root.render(<Apple/>)