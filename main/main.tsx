import React from 'react';
import { useNavigate } from 'react-router-dom';
import Garfish from 'garfish';
import { Observable } from 'rxjs';
const Main = () => {
	const navigate = useNavigate();
	const observable = new Observable((subscriber) => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
          subscriber.next(4);
          subscriber.complete();
        }, 1000);
      });
    console.log('observable',observable)
	return (
		<div className="h-screen flex">
			<div className="w-1/6 h-screen bg-indigo-300 p-4">
				<div className="font-mono text-indigo-50 font-black text-2xl text-center">main app</div>
				<div className="flex mt-4 flex-col gap-3 items-center">
					<div className="underline text-violet-50 cursor-pointer" onClick={() => Garfish.router.replace({path:'apps/apple/'})}>👉 garfish to 🍎 page</div>
					<div className="underline text-violet-50 cursor-pointer" onClick={() => navigate('../apps/apple/', { replace:true })}>👉 navigate to 🍎 page</div>
					{/* <div className="underline text-violet-50 cursor-pointer" onClick={() => navigate('../apps/grape/', { replace:true })}>👉 link to 🍇 page</div>
					<div className="underline text-violet-50 cursor-pointer" onClick={() => navigate('../apps/orange/', { replace:true })}>👉 link to 🍊 page</div>
					<div className="underline text-violet-50 cursor-pointer" onClick={() => navigate('../apps/pear/', { replace:true })}>👉 link to 🍐 page</div> */}
				</div>
			</div>
		</div>
	)
}

export default Main;