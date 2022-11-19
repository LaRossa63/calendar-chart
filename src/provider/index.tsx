import { queryClient } from 'api';
import { FC } from 'react';
import { QueryClientProvider } from 'react-query';
import { BaseStyled } from 'theme/BaseStyled';

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BaseStyled>{children}</BaseStyled>
      </QueryClientProvider>
    </>
  );
};
