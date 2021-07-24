import React from 'react';
import WorksItem from './WorksItem/WorksItem';
import classes from './WorksList.module.scss';

function WorksList({ works }) {
  const renderWorks = (items) =>
    items.map((item, index) => <WorksItem {...item} key={`${item.name}${index}`} />);
  return <ul className={classes.WorksList}>{renderWorks(works)}</ul>;
}

export default WorksList;
