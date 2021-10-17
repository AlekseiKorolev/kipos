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

const ProjectContainer = ({ match, openPreviewModal }) => {
  console.warn('>>> match ', match)
  return (
    <Switch>
      {/* architecture */}
      <Route path={`/projects/architecture/bogdanovo`} render={() => <ArchBogdanovo openPreviewModal={openPreviewModal}/>}/>
      <Route path={`/projects/architecture/vladimir`} render={() => <ArchVladimir openPreviewModal={openPreviewModal}/>}/>
      <Route path={`${match.path}/nelga`} render={() => <ArchNelga openPreviewModal={openPreviewModal}/>}/>
      {/* design */}
      <Route path={`/projects/design/bogdanovo`} render={() => <DesignBogdanovo openPreviewModal={openPreviewModal}/>}/>
      <Route path={`/projects/design/vladimir`} render={() => <DesignVladimir openPreviewModal={openPreviewModal}/>}/>
      <Route path={`/projects/design/leskovo`} render={() => <DesignLeskovo openPreviewModal={openPreviewModal}/>}/>
      <Route path={`${match.path}/radiobar`} render={() => <DesignRadiobar openPreviewModal={openPreviewModal}/>}/>
      <Route path={`${match.path}/millennium`} render={() => <DesignMillennium openPreviewModal={openPreviewModal}/>}/>
      <Route path={`${match.path}/nikitinskay`} render={() => <DesignNikitinskay openPreviewModal={openPreviewModal}/>}/>
      <Route path={`${match.path}/olimp`} render={() => <DesignOlimp openPreviewModal={openPreviewModal}/>}/>
      <Route path={`${match.path}/ramon`} render={() => <DesignRamon openPreviewModal={openPreviewModal}/>}/>
      {/* landscape */}
      <Route path={`/projects/landscape/vladimir`} render={() => <LandVladimir openPreviewModal={openPreviewModal}/>}/>
      <Route path={`/projects/landscape/leskovo`} render={() => <LandLeskovo openPreviewModal={openPreviewModal}/>}/>
      <Route path={`${match.path}/polyana`} render={() => <LandPolyana openPreviewModal={openPreviewModal}/>}/>
    </Switch>
  );
};

export default ProjectContainer;
