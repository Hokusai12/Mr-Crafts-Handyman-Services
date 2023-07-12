function LoginForm({ updateUsername, updatePassword }) {



    return (
        <form action="#" method="POST">
            <label>Username or Email</label>
            <input onChange={(e) => {updateUsername(e.target.value)}} id="username" type="text"/>
            <label>Password</label>
            <input onChange={(e) => {updatePassword(e.target.value)}} id="password" type="text"/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default LoginForm;