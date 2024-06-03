import { List, ListItem } from '@tremor/react';

type LeaderboardProps = {
	players: { name: string; score: number }[];
};

const Leaderboard = ({ players }: LeaderboardProps) => {
	return (
		<List>
			{players
				// Sorts on the basis of score
				?.sort((a, b) => a.score - b.score)
				.map((player, index) => (
					<ListItem
						className='font-medium px-3'
						key={player.name}
					>
						<span>
							#{index + 1} {player.name}
						</span>
						<span>{player.score}</span>
					</ListItem>
				))}
		</List>
	);
};

export default Leaderboard;
