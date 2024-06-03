import ChatBox from './ChatBox';
import { Text } from '@tremor/react';
import { cookies } from 'next/headers';
import Leaderboard from './Leaderboard';
import DrawingBoard from './DrawingBoard';
import Branding from '@/components/Branding';

const GamePage = ({ params }: any) => {
	const isAuthorised = cookies().get(params.gameId);
	if (isAuthorised) {
		return (
			<div className=''>
				<Branding />
			</div>
		);
	}
	return (
		<>
			<Branding />
			<div className='grid container mx-auto divide-x divide-tremor-content-subtle gap-x-3 pt-20 md:grid-cols-8'>
				{/* Leaderboard Section */}
				<div className='col-span-2 space-y-3'>
					<Text className='text-xl font-medium'>Leaderboard</Text>
					<Leaderboard
						players={[
							{ name: 'Alice', score: 92 },
							{ name: 'Bob', score: 85 },
							{ name: 'Charlie', score: 78 },
							{ name: 'David', score: 88 },
							{ name: 'Eve', score: 95 },
							{ name: 'Frank', score: 80 },
							{ name: 'Grace', score: 89 },
							{ name: 'Hannah', score: 91 },
							{ name: 'Ivy', score: 84 },
							{ name: 'Jack', score: 77 }
						]}
					/>
				</div>

				{/* Drawind Board Section */}
				<div className='col-span-4'>
               <DrawingBoard />
            </div>

				{/* Chat Section */}
				<div className='col-span-2'>
               <ChatBox />
            </div>
			</div>
		</>
	);
};

export default GamePage;
