import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './index.css'
import Main from './main';

const RootComponent = () => {
	return (
		<Router>
			<Routes>
					<Route path="main/*" element={<Main/>}/>
					<Route
            path="/"
            element={<Navigate replace to='main/*' />}
          />
					<Route
            path="apps/apple/*"
            element={<App/>}
          />
			</Routes>
		</Router>
	)
}

const App = () => {
  return <div id="micro-app" className="w-5/6 h-screen bg-indigo-100 p-4"></div>
}

export default RootComponent;