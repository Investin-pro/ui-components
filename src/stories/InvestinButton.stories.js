import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { InvestinButton } from '../components/InvestinButton';

const stories = storiesOf('Bootstrap Components', module);

stories.add('Button', () => {
  return (
    <InvestinButton text="Investin" />
  );
});
