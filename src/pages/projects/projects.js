import React from "react";

import { Route } from "react-router-dom";

// components
import ProjectsDesign from "../../components/projects-design/projects-design.component";
import ProjectsArchitecture from "../../components/projects-architecture/projects-architecture.component";
import ProjectsLandscape from "../../components/projects-landscape/projects-landscape.component";

const Projects = ({ match }) => {
  return (
    <div>
      <Route path={`${match.path}/design`} component={ProjectsDesign} />
      <Route
        path={`${match.path}/architecture`}
        component={ProjectsArchitecture}
      />
      <Route path={`${match.path}/landscape`} component={ProjectsLandscape} />
    </div>
  );
};

export default Projects;
