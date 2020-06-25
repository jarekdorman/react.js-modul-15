import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink.js';
import { listData } from '../../data/dataStore';
import PropTypes from 'prop-types';
// import Search from '../Search/SearchContainer';
import { DragDropContext } from 'react-beautiful-dnd';

class Home extends React.Component {
  state = {
    lists: listData || [],
  };
  
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  };

  render() {
    const { title, subtitle, lists } = this.props;
    const moveCardHandler = (result) => {
      if (
        result.destination &&
        (result.destination.index != result.source.index ||
          result.destination.droppableId != result.source.droppableId)
      ) {
        console.log({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/* <Search /> */}
        <DragDropContext onDragEnd={moveCardHandler}>
          {lists.map((listData) => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </DragDropContext>
      </main>
    );
  }
}

export default Home;
