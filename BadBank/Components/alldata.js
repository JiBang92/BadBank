function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="primary"
      header="All Data"
      body={
        <>
          <p>
            Name:
            <br /> {JSON.stringify(ctx.user.name)}
          </p>
          <p>
            Email:
            <br /> {JSON.stringify(ctx.user.email)}
          </p>
          <p>
            Password:
            <br /> {JSON.stringify(ctx.user.password)}
          </p>
          <p>
            Balance:
            <br /> ${JSON.stringify(ctx.user.balance)}
          </p>
        </>
      }
    />
  );
}
