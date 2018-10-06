import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => (
	<div>
		<h1>Robots</h1>
		<Link href='/'>
			<button>Home</button>
		</Link>
		<div>
			{
				props.robots.map(robot => (
					<li key={robot.id}>
						<Link href={`robots/${robot.id}`}>
							<a>{robot.name}</a>
						</Link>
					</li>
				))
			}
		</div>
	</div>
);

Robots.getInitialProps = async function() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	// Will render on the server every time and client only on initial load
	console.log(data);
	
	return {
		robots: data
	}
}

export default Robots;