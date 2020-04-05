import React, { useState } from 'react';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Paper, Typography, styled } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import bgImage from './assets/bg.jpg'

enum ExpansionPanelEnum {
  Overview = 'Overview',
  TechnicalRequirement = 'TechnicalRequirement',
  Journal = 'Journal',
  Additional = 'Additional',
}


const App = () => {
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel: string) => setExpanded(panel !== expanded ? panel : '' );
  
  return (
    <StyledContainer>
      
      <Wrapper>
        <StyledPaper elevation={3}>
          <PageTitle variant="h3">Module: Grade journal</PageTitle>
          <PageTitle variant="h4">Group: 6</PageTitle>
        </StyledPaper>
        <ExpansionPanel expanded={expanded === ExpansionPanelEnum.Overview} onChange={() => handleChange(ExpansionPanelEnum.Overview)}>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Overview</Typography>
          </ExpansionPanelSummary>
          <StyledExpansionPanelDetails>
          <p><b>Team leader:</b>Bondarenko Vadim</p>
            <b>Participants:</b>
            <TextWithIndent>> Bondarenko Vadim</TextWithIndent>
            <TextWithIndent>> Kikhniei Danyil</TextWithIndent>
            <Paragraph><b>Task manager:</b> <a href="https://trello.com/b/myYAJjiQ/grade-project" target="_blank" rel="noopener noreferrer">Trello</a></Paragraph>
            <Paragraph><b>Project terms:</b> <i>04.04.20 - 25.05.20</i></Paragraph>
          </StyledExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === ExpansionPanelEnum.TechnicalRequirement} onChange={() => handleChange(ExpansionPanelEnum.TechnicalRequirement)}>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Technical Requirement</Typography>
          </ExpansionPanelSummary>
          <StyledExpansionPanelDetails>
            <Paragraph>
              <b>Link with file: </b>
              <a href="https://docs.google.com/document/d/1naWBdEDxwGP0klN37xVbURi7DCDHTff_5wSZ_U6lpLU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Technical Requirement</a>
            </Paragraph>
          </StyledExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === ExpansionPanelEnum.Journal} onChange={() => handleChange(ExpansionPanelEnum.Journal)}>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Journal</Typography>
          </ExpansionPanelSummary>
          <StyledExpansionPanelDetails>
            <p><b>Link with file: </b><a href="https://docs.google.com/spreadsheets/d/1x6ZvnlZJgqdzx6J-GxXfw4dHkzN_ElqeP9r3kB1gxes/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Journal</a></p>
            <Paragraph><b>Time logs:</b></Paragraph>
            <TextWithIndent>> <a href="https://drive.google.com/open?id=1MPOPYk5zhMuqNArLTZ4wtdYgU6WmVp2_7HHCBBaPuJo" target="_blank" rel="noopener noreferrer">Bondarenko</a></TextWithIndent>
            <TextWithIndent>> <a href="https://drive.google.com/open?id=1OilDZAEvm3yS4HNb09mh_wLh_UxgaeiyRUSaZqALPls" target="_blank" rel="noopener noreferrer">Kikhniei</a></TextWithIndent>
          </StyledExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === ExpansionPanelEnum.Additional} onChange={() => handleChange(ExpansionPanelEnum.Additional)}>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Additional</Typography>
          </ExpansionPanelSummary>
          <StyledExpansionPanelDetails>
            <Paragraph><b>Link with design:</b> <a href="https://j935q.draftium.site" target="_blank" rel="noopener noreferrer">Design</a></Paragraph>
            <Paragraph><b>ERD:</b> <i>In process</i></Paragraph>
          </StyledExpansionPanelDetails>
        </ExpansionPanel>
      </Wrapper>
    </StyledContainer>
  );
}


const StyledContainer = styled('div')({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
});

const Wrapper = styled('div')({
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
})

const StyledPaper = styled(Paper)({
  marginBottom: '25px'
})

const PageTitle = styled(Typography)({
  margin: '15px',
})

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)({
  flexDirection: 'column'
})

const Paragraph = styled('p')({
  margin: '10px 0',
})

const TextWithIndent = styled('p')({
  margin: '10px 0',
  textIndent: '25px',
})

export default App;
