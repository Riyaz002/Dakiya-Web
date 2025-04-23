import useNavigate from 'react-router-dom'

const mNavigator = null;

export const setNavigator = (navigator) => {
	mNavigator = navigator;
}

export const navigate = (path) => {
	if(mNavigator){
		mNavigator.navigate(path);
	} else{
		console.error('Navigator not ready yet.');
	}
}