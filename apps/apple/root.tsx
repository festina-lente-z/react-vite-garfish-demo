import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  App  from './app'

const RootComponent = ({basename})=>{
	console.log('RootComponent-basename',basename)
	return (
		<BrowserRouter basename={basename}>
			<Routes>
				<Route
					path="*"
					element={<App />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default RootComponent;