import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './index.css'

const MainLayout = () => {
	return (
		<div className="h-screen flex">
			<div className="w-1/6 h-screen bg-indigo-300">
				<div className="font-mono text-indigo-50 font-black text-2xl text-center">main app</div>
				<div>
					<a target="_self" href="http://localhost:5173/apps/apple/">apple</a>
				</div>
			</div>
			<div id="micro-app" className="w-5/6 h-screen bg-indigo-100 p-4"></div>
		</div>
	)
}

export default MainLayout;