import {
	Card,
	Grid,
	Text,
	Button,
	Divider,
	TextInput,
	NumberInput
} from '@tremor/react';
import Link from 'next/link';
import Branding from '@/components/Branding';

const CreatePage = () => {
	return (
		<div className='w-full min-h-screen grid place-items-center'>
			<Branding />
			<Card className='w-[26rem] grid'>
				<Text className='mb-3 text-xl text-white'>Create a Room</Text>
				<form>
					<Grid className='gap-y-3 mb-3'>
						<TextInput
							placeholder='Your Name'
							className=''
						/>
						<div className='space-y-1'>
							<Text className='w-full'>Max Players</Text>
							<NumberInput
								min={3}
								max={12}
								defaultValue={3}
							/>
						</div>
						<div className='space-y-1'>
							<Text className='w-full'>Enter Rounds</Text>
							<NumberInput
								min={3}
								max={12}
								defaultValue={3}
							/>
						</div>
						<div className='space-y-1'>
							<Text className='w-full'>Drawing Time</Text>
							<NumberInput
								min={20}
								max={80}
								defaultValue={20}
							/>
						</div>
					</Grid>
					<Button
						type='submit'
						className='bg-white w-full'
					>
						Create a Game
					</Button>
				</form>

				<Divider>OR</Divider>

				<Link href={'/'}>
					<Button className='w-full'>Join Game</Button>
				</Link>
			</Card>
		</div>
	);
};

export default CreatePage;
