class Tasks extends Component {
  render() {
    let tasks = this.props.tasks.map(task => {
      return <li>{task.content}</li>
    })
    return (
      <div>
        {tasks}
      </div>
    )
  }
}
//SAME AS
const tasks = (props) => {
  let tasks = props.tasks.map(task => {
    <li>{task.content}</li>
  })
  return (
    <div>
      {tasks}
    </div>
  )
}
