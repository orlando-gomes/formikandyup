import React from 'react';

import ValidatedLoginForm from '../../components/ValidatedLoginForm';

import { Container } from './styles';

function MainPage() {
  return (
    <Container>
      <ValidatedLoginForm />
    </Container>
  );
}

export default MainPage;
