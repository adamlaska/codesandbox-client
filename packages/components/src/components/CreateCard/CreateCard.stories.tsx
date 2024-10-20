import React from 'react';
import styled from 'styled-components';
import { CreateCard } from './CreateCard';

export default {
  title: 'components/facelift/CreateCard',
  component: CreateCard,
};

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  height: 154px;
`;

export const SimpleVariant = () => (
  <CardWrapper>
    <CreateCard
      as="a"
      href="#"
      target="_blank"
      icon="github"
      label="Import from GitHub"
    />
  </CardWrapper>
);

export const LongLabelVariant = () => (
  <CardWrapper>
    <CreateCard
      as="button"
      onClick={() => alert('hello')}
      icon="plus"
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla, est tempor pellentesque dapibus, ligula dolor egestas ante, tempor pharetra."
    />
  </CardWrapper>
);
