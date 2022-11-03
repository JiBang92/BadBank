const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext();

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? "bg-" + props.bgcolor : " ";
    return "card text-" + bg + " mb-3";
  }

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <h1 className="card-header">{props.header}</h1>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
