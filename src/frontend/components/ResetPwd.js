function ResetPwd() {
	return (
		<div>
			<div className='flex-center'>
				<div className='flex-center box-auth'>
					<form>
						<h1 className='title-section'>Zmień hasło</h1>
						<div className='flex-column'>
							<div className='space-auth'>
								<label>
									<p>Wprowadź nowe hasło</p>
									<input className='input-auth' type='text' placeholder='Wprowadź hasło' />
								</label>
								<label>
									<p>Powtórz hasło</p>
									<input className='input-auth' type='text' placeholder='Powtórz hasło ' />
								</label>
							</div>
						</div>
						<div className='flex-column'>
							<button className='btn-auth' type='submit'>
								ZMIEŃ HASŁO
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ResetPwd
