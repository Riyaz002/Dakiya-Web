import { View, Text, Button } from 'react-native'
// import navigate from '../hooks/useAppRouter.tsx'
import { useRouter } from 'expo-router';

export default function Home(){
	const router = useRouter();
	//router.push('/products/123');

	return <View>
		<Text>Home</Text>
		{/*<Link href="/about">About</Link>*/}
		<Button text={ () => {<Text>Navigate to About</Text>}} onClick={() => {router.push("/About")}}>
		</Button>
	</View>
}