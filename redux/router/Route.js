//Responsible for rendering a UI when a location matches a route's path.
//Argument: Path prop (string) that describes the path name.

//3 ways to render something with a Route component
  //1. <Route component>
    <Route path='/unicorns' component={ Unicorns }

  //2. <Route render> WHEN you need to pass props to the component dynamically.
  <Route path='/unicorns' render={ () => <Unicorns /> }

    <Route path='/ideas/:id' render={({ match }) => {
      const idea = ideas.find(idea => idea.id === parseInt(match.params.id));

      if (idea) {
        return <ListItem match={match} {...idea} />;
      }

      return (<div>This idea does not exist! </div>);
    }} />
  //3. <Route children>
    //Works just like render, but gets called whether there's a match or not.
  <Route path='/other-unicorns' children={ () => <Unicorns />}

//EXAMPLE
export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Todo List App</h2>
        </div>
        <Message />
        <Router>
          <div className="Todo-App">
            <TodoForm />
            <Route path='/:filter?' render={({match}) => (
              <TodoList filter={match.params.filter} />
            )} />
            <Footer />
          </div>
        </Router>
      </div>
