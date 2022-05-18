import { Card, Container, Divider, Header, Text } from '@components/UI';
import {
  CopyScenarioButton,
  RunScenarioButton
} from '../ScenariosList/ScenarioCardActions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getExampleScenarios } from '@actions/scenario';

const LearnByExample = () => {
  const dispatch = useDispatch();
  const examples = useSelector(state => state.exampleScenarios);

  useEffect(() => {
    dispatch(getExampleScenarios());
  }, [dispatch]);

  return (
    <Container fluid id="learn-by-example">
      <Header as="h2">Learn by example</Header>
      <Header.Subheader className="dashboard-subheader">
        Run or copy example scenarios created by the team to learn all the
        features of Teacher Moments.
      </Header.Subheader>
      <Card.Group itemsPerRow="2" className="dashboard-card-group">
        {examples.map(scenario => {
          return (
            <Card
              raised
              key={`example-scenario-${scenario.id}`}
              className="dashboard-card"
            >
              <Card.Content>
                <Card.Header as="h2">{scenario.title}</Card.Header>
                <Card.Description>
                  <Text.Truncate lines={3}>
                    {scenario.description}
                  </Text.Truncate>
                </Card.Description>
                <Divider />
                <Card.Content extra className="dashboard-button-group">
                  <RunScenarioButton id={scenario.id} activeRunSlideIndex={0} />
                  <CopyScenarioButton id={scenario.id} />
                </Card.Content>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </Container>
  );
};

export default LearnByExample;
