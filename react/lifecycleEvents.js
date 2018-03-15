componentWillMount = () => {
  this.fetchTransactions()
    .then(response => this.setState({transactions: response}))
}
