function Home() {
  return (
    <>
      <Card
        bgcolor="primary"
        txtcolor="black"
        header="BadBank Landing Page"
        title="Welcome to BadBank"
        text="You Can Use This Bank"
        body={
          <img src="bank.png" className="img-fluid" alt="Responsive image" />
        }
      />
    </>
  );
}
