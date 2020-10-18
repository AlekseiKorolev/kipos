import React from "react";

import { Route } from "react-router-dom";

// components
import ProjectsDesign from "../projects-design/projects-design.component";
import ProjectsArchitecture from "../projects-architecture/projects-architecture.component";
import ProjectsLandscape from "../projects-landscape/projects-landscape.component";
// container
import ProjectContainer from "../project-container/project-container";

const ProjectsContainer = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}/design`} component={ProjectsDesign} />
      <Route
        exact
        path={`${match.path}/architecture`}
        component={ProjectsArchitecture}
      />
      <Route
        exact
        path={`${match.path}/landscape`}
        component={ProjectsLandscape}
      />
      <Route path="*" component={ProjectContainer} />
    </div>
  );
};

export default ProjectsContainer;
