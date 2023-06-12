import React, {useEffect, useState} from 'react';
import {IUniversityList} from '../utils/types';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import UniversityList from '../components/UniversityList';
import {fetchUserData} from '../utils/authThunk';
import api from '../utils/api';

const Feed = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [feedUniversities, setFeedUniversities] = useState<IUniversityList[]>([]);
	const {user} = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		setIsLoading(true);
		const getFeed = (userId: number) => {
			api.get(`/auth/users/${userId}/feed/`).then(({data}) => {
				setFeedUniversities(data);
				setIsLoading(false);
			}).catch(error => {
				setIsLoading(false);
				console.log(error);
			});
		};

		if (!user.id) {
			dispatch(fetchUserData()).then((resp) => {
				getFeed(resp.payload.id);
			});
		} else {
			getFeed(user.id);
		}
	}, []);

	return (
		<main className={'main'}>
			<div className={'main__wrapper'}>
				{/*<h2 className="main__title">Ваше будущее в рекомендациях: Идеальные вузы для вас!</h2>*/}
				<h2 className="main__title">Подборка университетов</h2>
				<UniversityList universities={feedUniversities} isLoading={isLoading}/>
			</div>
		</main>
	);
};

export default Feed;
