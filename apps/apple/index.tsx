import Garfish from 'garfish';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Apple from './apple'

// Garfish.run({
//   basename: '/',
//   domGetter: '#subApp',
//   apps: [
//       {
//       name: 'apple',
//       activeWhen: '/app/apple',
//       entry: 'http://localhost:3000', // html入口
//       },
//   ],
// });

const root = createRoot(document.getElementById('app'))
root.render(<Apple/>)