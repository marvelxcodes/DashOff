import Image from 'next/image';

const Branding = () => {
	return (
		<div className='fixed flex gap-x-3 items-center top-5 left-5 bg-white p-2 rounded-xl overflow-hidden'>
			<Image
				width={32}
				height={32}
				src={'/logo512.png'}
				alt='dashoff logo icon'
			/>
			<h1 className='text-xl font-medium pr-2'>DashOff</h1>
		</div>
	);
};

export default Branding;
