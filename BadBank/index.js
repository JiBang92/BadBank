function Spa() {
  const [user, setUser] = React.useState({
    name: "Ji",
    email: "Ji@mit.edu",
    password: "secret",
    balance: 100,
  });

  return (
    <>
      <HashRouter>
        <NavBar />
        <UserContext.Provider value={{ user, setUser }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" exact component={CreateAccount} />
          <Route path="/alldata/" exact component={AllData} />
          <Route path="/balance/" exact component={Balance} />
          <Route path="/deposit/" exact component={Deposit} />
          <Route path="/login/" exact component={Login} />
          <Route path="/withdraw/" exact component={Withdraw} />
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Spa />);
