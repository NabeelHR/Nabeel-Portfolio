import Input from '../components/input';
export default function Signup() {
	return (
		<div className='flex h-screen bg-red-300 p-4'>
			<div className='flex:6 w-screen sm:w-1/2 mx-auto mt-16 sm:mt-32 border border-blue-800'>
				Demo works
				<Input label='email' />
				<Input label='login password' />
			</div>
		</div>
	);
}
