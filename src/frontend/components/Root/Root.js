function Root() {
	const login = () => {}

	return (
		<div>
			<input type='text' placeholder='login' />

			<input type='password' placeholder='password' />

			<input type='button' onClick={login()} />
		</div>
	)
}

export default Root
