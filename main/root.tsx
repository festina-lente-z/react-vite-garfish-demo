import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './index.css'
import Main from './main';

const RootComponent = ()=>{
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
            element={<Main/>}
          />
			</Routes>
		</Router>
	)
}

export default RootComponent;