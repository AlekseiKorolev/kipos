import React from "react";

import { Switch, Route } from "react-router-dom";

// components
import ProjectsDesign from "../../components/projects-design/projects-design.component";
import ProjectsArchitecture from "../../components/projects-architecture/projects-architecture.component";
import ProjectsLandscape from "../../components/projects-landscape/projects-landscape.component";
import ServicesDesign from "../../components/services-design/services-design.component";
import ServicesArchitecture from "../../components/services-architecture/services-architecture.component";
import ServicesLandscape from "../../components/services-landscape/services-landscape.component";
import ServicesRealization from "../../components/services-realization/services-realization.component";

// container
import ProjectContainer from "../project-container/project-container";

const ServicesAndProjectsContainer = ({ match }) => {
  return (
    <Switch>
      {/*projects*/}
      <Route exact path={`/projects/design`} component={ProjectsDesign} />
      <Route
        exact
        path={`/projects/architecture`}
        component={ProjectsArchitecture}
      />
      <Route exact path={`/projects/landscape`} component={ProjectsLandscape} />
      {/*service*/}
      <Route exact path={`/services/design`} component={ServicesDesign} />
      <Route
        exact
        path={`/services/architecture`}
        component={ServicesArchitecture}
      />
      <Route exact path={`/services/landscape`} component={ServicesLandscape} />
      <Route
        exact
        path={`/services/realization`}
        component={ServicesRealization}
      />
      <Route path="*" component={ProjectContainer} />
    </Switch>
  );
};

export default ServicesAndProjectsContainer;
