import React, { useState } from 'react';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Container, Typography} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

enum ExpansionPanelEnum {
  Overview = 'Overview',
  TechnicalRequirement = 'TechnicalRequirement',
  Journal = 'Journal',
  Additional = 'Additional',
}


const App = () => {
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel: string) => setExpanded(panel)
  
  return (
    <Container>
      <ExpansionPanel expanded={expanded === ExpansionPanelEnum.Overview} onChange={() => handleChange(ExpansionPanelEnum.Overview)}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography>General settings</Typography>
          <Typography>I am an expansion panel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === ExpansionPanelEnum.TechnicalRequirement} onChange={() => handleChange(ExpansionPanelEnum.TechnicalRequirement)}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography>General settings</Typography>
          <Typography>I am an expansion panel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === ExpansionPanelEnum.Journal} onChange={() => handleChange(ExpansionPanelEnum.Journal)}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography>General settings</Typography>
          <Typography>I am an expansion panel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === ExpansionPanelEnum.Additional} onChange={() => handleChange(ExpansionPanelEnum.Additional)}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography>General settings</Typography>
          <Typography>I am an expansion panel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Container>
  );
}

export default App;
