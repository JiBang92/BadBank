function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [title, setTitle] = React.useState(`Balance: $${ctx.user.balance}`);
  const [value, setValue] = React.useState("");
  const [balance, setBalance] = React.useState(ctx.user.balance);
  const { setUser } = React.useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    var newBalance = balance - Number(value);
    setBalance(newBalance);
    setUser({ ...ctx.user, balance: newBalance });
    setTitle(`Balance: $${newBalance}`);
  }

  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      title={title}
      body={
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            required
            className="form-control"
            id="deposit"
            placeholder="Withdrawal Amount"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <br />
          <button className="btn btn-light">Withdraw</button>
        </form>
      }
    />
  );
}
