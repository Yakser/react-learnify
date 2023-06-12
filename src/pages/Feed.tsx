import React, {useEffect, useState} from 'react';
import {IUniversityList} from '../utils/types';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import UniversityList from '../components/UniversityList';
import {fetchUserData} from '../utils/authThunk';
import api from '../utils/api';
import {Link} from 'react-router-dom';

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

				{
					user.id ? (
							<>
								<h2 className="main__title">Подборка университетов</h2>
								<UniversityList universities={feedUniversities} isLoading={isLoading}/>
							</>
						)
						: (
							<h2 className="main__title">
								<Link to={'/login'} className={'main__link'}>
									Войдите
								</Link> или <Link to={'/register'} className={'main__link'}> зарегистрируйтесь
							</Link>
								, чтобы увидеть рекомендации
							</h2>
						)
				}
			</div>
		</main>
	);
};

export default Feed;
