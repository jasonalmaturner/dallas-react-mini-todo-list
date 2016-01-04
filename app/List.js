import React from 'react';

const List = React.createClass({
  render() {
    const styles = {
      uList: {
        paddingLeft: 0,
        listStyleType: 'none',
      },
      listGroup: {
        margin: '5px 0',
        borderRadius: 5,
      },
      removeItem: {
        fontSize: 20,
        float: 'left',
        position: 'absolute',
        top: 12,
        left: 6,
        cursor: 'pointer',
        color: 'rgb(222, 79, 79)',
      },
      todoItem: {
        paddingLeft: 20,
        fontSize: 17,
      },
    };

    const listItems = this.props.items.map((item, i) => {
      return (
        <li
          className="list-group-item"
          style={styles.listGroup}
          key={i} >
          <span
            className="glyphicon glyphicon-remove"
            style={styles.removeItem}
            onClick={this.props.remove.bind(null, i)} >
          </span>
          <span style={styles.todoItem}>{item}</span>
        </li>
      );
    });

    return (
      <div>
        <ul style={styles.uList}>
          {listItems}
        </ul>
      </div>
    );
  },
});

export default List;
