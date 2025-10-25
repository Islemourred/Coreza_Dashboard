import Context from './index';
import React, { useState } from 'react';

const { All, Doing, Done } = require('../MockTable/project');

const ProjectProvider = (props) => {
  const [allProject, setAllProject] = useState(All);
  const [doingProject, setDoingProject] = useState(Doing);
  const [doneProject, setDoneProject] = useState(Done);
  const addNewProject = (project) => {
    const tempObj = {
      id: allProject.length + 1,
      title: project.title,
      badge: project.status,
      img: 'user/3.jpg',
      sites: 'Themeforest, australia',
      issue: <div className="text-success col-6">40</div>,
      resolved: <div className="text-success col-6">40</div>,
      comment: <div className="text-success col-6">20</div>,
      desc: project.description,
      like: project.rate,
      progress: project.progress_level,
      customers_img1: 'user/3.jpg',
      customers_img2: 'user/5.jpg',
      customers_img3: 'user/1.jpg',
    };
    setAllProject([...allProject, tempObj]);
    if (project.status === 'Done') setDoneProject([...doneProject, tempObj]);
    else setDoingProject([...doingProject, tempObj]);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        allProject,
        doingProject,
        doneProject,
        addNewProject: addNewProject,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ProjectProvider;
