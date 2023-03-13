import userPic from '../../assets/cardImg.png';

import SmallCardList from './SmallCardList';
import useFetch from '../../hooks/useFetch';

export function SmallCard() {
	const [topVideos] = useFetch(
		'https://63d4f5fa0e7ae91a00a557e4.mockapi.io/products'
	);
	const [users] = useFetch('https://jsonplaceholder.typicode.com/users/');

	return (
		<div>
			<div className='flex items-center mb-7'>
				<img src={userPic} alt='Dollie Blair' />

				<h2 className='ml-4'>Dollie Blair</h2>
			</div>

			<SmallCardList posts={topVideos} />
		</div>
	);
}
