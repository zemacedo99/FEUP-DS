import React from 'react';

import { PageTitle } from '../../style/GlobalStyle';
import { PageContainer } from './style';

export default function page404() {
  return (
    <PageContainer>
      <div className="text-center">
        <PageTitle>
          404
        </PageTitle>
        <p>
          The page you requested does not exist :(
        </p>
      </div>
    </PageContainer>
  );
}
