import Link from 'next/link';
import Image from '../components/Image';

const About = () => (
	(
		<div style={{fontSize: '20px', color: 'blue'}}>
			<h1>About</h1>
			<Image />
			<Link href='/'>
				<button>Back</button>
			</Link>
			<p>Client Side SSR Magic!</p>
		</div>
	)
);

export default About;