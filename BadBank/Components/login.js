function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    clearForm();
  }

  function clearForm() {
    setUsername("");
    setPassword("");
  }

  return (
    <Card
      bgcolor="success"
      header="Login"
      title=""
      body={
        <>
          Username <br />
          <input
            type="input"
            className="form-control"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          Password <br />
          <input
            type="input"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleSubmit}
          >
            Login
          </button>
        </>
      }
    />
  );
}
