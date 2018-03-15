//Presentational components are (tend to be stateless)
  //Concerned with how things look.
  //May contain both presentation and container components inside.
  //Have no dependencies on the rest of the app.
  //Receive data and callbacks exclusively via props
  //Rarely have their own state.
  //Typically written as functional components.

//Examples: Page, sidebar, story, userInfo, list


//Container components are:
  //Concerned with how things work.
  //Provide data and behavior to other presentational and container components.
  //Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.

//Examples
  //UserPage, StoryContainer, etc.

//Functional versus class components
  //Only use class if you need state, lifecycle hooks, or performance optimizations.

//WORKFLOW
  //Start with just presentational components
  //When you notice that intermediate components are often not using props, but just continuing to pass them down it's a good time to add a container component.
