import React from 'react';

import { PageContainer, Title } from './style';

export default function page404() {
  return (
    <PageContainer>
      <div className="text-center">
        <Title>
          404
        </Title>
        <p>
          The page you requested does not exist :(
        </p>
      </div>
    </PageContainer>
  );
}
