import React from "react";

import { Route } from "react-router-dom";

// components
import ArchBogdanovo from "../project-arch-bogdanovo/project-arch-bogdanovo.component";
import ArchNelga from "../project-arch-nelga/project-arch-nelga.component";
import ArchVladimir from "../project-arch-vladimir/project-arch-vladimir.component";
import DesignRadiobar from "../project-design-radiobar/project-design-radiobar.component";
import DesignBogdanovo from "../project-design-bogdanovo/project-design-bogdanovo.component";
import DesignLeskovo from "../project-design-leskovo/project-design-leskovo.component";
import DesignMillennium from "../project-design-millennium/project-design-millennium.component";
import DesignNikitinskay from "../project-design-nikitinskay/project-design-nikitinskay.component";
import DesignOlimp from "../project-design-olimp/project-design-olimp.component";
import DesignVladimir from "../project-design-vladimir/project-design-vladimir.component";
import DesignRamon from "../project-design-ramon/project-design-ramon.component";

const ProjectContainer = ({ match }) => {
  return (
    <div>
      {/* architecture */}
      <Route
        path={`/projects/architecture/bogdanovo`}
        component={ArchBogdanovo}
      />
      <Route
        path={`/projects/architecture/vladimir`}
        component={ArchVladimir}
      />
      <Route path={`${match.path}/nelga`} component={ArchNelga} />
      {/* design */}
      <Route path={`/projects/design/bogdanovo`} component={DesignBogdanovo} />
      <Route path={`/projects/design/vladimir`} component={DesignVladimir} />
      <Route path={`${match.path}/radiobar`} component={DesignRadiobar} />
      <Route path={`${match.path}/leskovo`} component={DesignLeskovo} />
      <Route path={`${match.path}/millennium`} component={DesignMillennium} />
      <Route path={`${match.path}/nikitinskay`} component={DesignNikitinskay} />
      <Route path={`${match.path}/olimp`} component={DesignOlimp} />
      <Route path={`${match.path}/ramon`} component={DesignRamon} />
    </div>
  );
};

export default ProjectContainer;
