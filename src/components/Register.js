function Register(){
    return(
        <div>
            <p>Register</p>
            <form>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="repeat password" placeholder="repeat password" />
                <label>
                    Accept rule
                <input type="checkbox" />
                </label>
                <button type="submit">Register</button> 
            </form>
        </div>
    )
}

export default Register;