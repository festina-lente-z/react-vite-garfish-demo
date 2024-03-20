import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
	const navigate = useNavigate();
	return (
		<div className="h-screen flex">
			<div className="w-1/6 h-screen bg-indigo-300 p-4">
				<div className="font-mono text-indigo-50 font-black text-2xl text-center">main app</div>
				<div className="flex justify-center mt-4">
					<div className="underline text-violet-50 cursor-pointer" onClick={() => navigate('../apps/apple/', { replace:true })}>👉 link to apple page</div>
				</div>
			</div>
			<div id="micro-app" className="w-5/6 h-screen bg-indigo-100 p-4"></div>
		</div>
	)
}

export default Main;