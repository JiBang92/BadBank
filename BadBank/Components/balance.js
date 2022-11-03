function Balance() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="secondary"
      header="Balance"
      title="Amount"
      body={<p>${ctx.user.balance}</p>}
    />
  );
}
