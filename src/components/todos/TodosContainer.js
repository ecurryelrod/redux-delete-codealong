import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map(todo => <Todo key={todo.id} todo={todo} delete={this.props.delete} />)
  
  render() {
    return(
      <ol>
        {this.renderTodos()}
      </ol>
    );
  }
};
  
const mapStateToProps = state => ({todos: state.todos})

const mapDispatchToProps = dispatch => (
  {delete: todo => dispatch({type: 'DELETE_TODO', todo})}
)
  
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);