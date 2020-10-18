import React from "react";

import { Route } from "react-router-dom";

// components
import ArchBogdanovo from "../project-arch-bogdanovo/project-arch-bogdanovo.component";
import ArchNelga from "../project-arch-nelga/project-arch-nelga.component";
import ArchVladimir from "../project-arch-vladimir/project-arch-vladimir.component";

const ProjectContainer = ({ match }) => {
  return (
    <div>
      <Route path={`${match.path}/bogdanovo`} component={ArchBogdanovo} />
      <Route path={`${match.path}/nelga`} component={ArchNelga} />
      <Route path={`${match.path}/vladimir`} component={ArchVladimir} />
    </div>
  );
};

export default ProjectContainer;
