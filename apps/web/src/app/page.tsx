import Link from 'next/link';
import Branding from '../components/Branding';
import { Button, Card, Divider, Flex, Text, TextInput } from '@tremor/react';

const HomePage = () => {
	return (
		<div className='w-full min-h-screen grid place-items-center'>
			<Branding />
			<Card className='w-[26rem] grid'>
				<Text className='mb-3 text-xl text-white'>Join a Room</Text>
				<Flex
					flexDirection='col'
					className='gap-y-3 mb-3'
				>
					<TextInput
						placeholder='Your Name'
						className=''
					/>
					<TextInput
						placeholder='Enter Room Code'
						className=''
					/>
					<TextInput
						className=''
						type='password'
						placeholder='Enter Password (Optional)'
					/>
				</Flex>
				<Button className='bg-white w-full'>Join Game</Button>

				<Divider>OR</Divider>
				<Link href={'/create'}>
					<Button className='bg-white w-full'>Create a Game </Button>
				</Link>
			</Card>
		</div>
	);
};

export default HomePage;
