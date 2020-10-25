import React from "react";

import { Switch, Route } from "react-router-dom";

// components
import ArchBogdanovo from "../../components/project-arch-bogdanovo/project-arch-bogdanovo.component";
import ArchNelga from "../../components/project-arch-nelga/project-arch-nelga.component";
import ArchVladimir from "../../components/project-arch-vladimir/project-arch-vladimir.component";
import DesignRadiobar from "../../components/project-design-radiobar/project-design-radiobar.component";
import DesignBogdanovo from "../../components/project-design-bogdanovo/project-design-bogdanovo.component";
import DesignLeskovo from "../../components/project-design-leskovo/project-design-leskovo.component";
import DesignMillennium from "../../components/project-design-millennium/project-design-millennium.component";
import DesignNikitinskay from "../../components/project-design-nikitinskay/project-design-nikitinskay.component";
import DesignOlimp from "../../components/project-design-olimp/project-design-olimp.component";
import DesignVladimir from "../../components/project-design-vladimir/project-design-vladimir.component";
import DesignRamon from "../../components/project-design-ramon/project-design-ramon.component";
import LandVladimir from "../../components/project-land-vladimir/project-land-vladimir.component";
import LandPolyana from "../../components/project-land-polyana/project-land-polyana.component";
import LandLeskovo from "../../components/project-land-leskovo/project-land-leskovo.component";

const ProjectContainer = ({ match }) => {
  return (
    <Switch>
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
      <Route path={`/projects/design/leskovo`} component={DesignLeskovo} />
      <Route path={`${match.path}/radiobar`} component={DesignRadiobar} />
      <Route path={`${match.path}/millennium`} component={DesignMillennium} />
      <Route path={`${match.path}/nikitinskay`} component={DesignNikitinskay} />
      <Route path={`${match.path}/olimp`} component={DesignOlimp} />
      <Route path={`${match.path}/ramon`} component={DesignRamon} />
      {/* landscape */}
      <Route path={`/projects/landscape/vladimir`} component={LandVladimir} />
      <Route path={`/projects/landscape/leskovo`} component={LandLeskovo} />
      <Route path={`${match.path}/polyana`} component={LandPolyana} />
    </Switch>
  );
};

export default ProjectContainer;
