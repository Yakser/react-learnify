import React from 'react';

import ProfileCard from '../components/ProfileCard';

const Profile: React.FC = () => {
	return (
		<main className={'main'}>
			<div className={'main__wrapper'}>
				<h2 className={'main__title'}>Профиль</h2>
				<ProfileCard />
			</div>
		</main>
	);
};

export default Profile;
