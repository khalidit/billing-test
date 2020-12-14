import { Paper } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';

interface AppLayoutProps {
  header: ReactElement;
  content: ReactElement;
  footer: ReactElement;
}

const AppLayoutComponent: FC<AppLayoutProps> = (props: AppLayoutProps): ReactElement => {
  const { content, footer, header } = props;
  return (
    <>
      {header}
      <Paper elevation={0} style={{paddingTop: 80, marginLeft: 20}}>{content}</Paper>
      {footer}
    </>
  );
};

export default AppLayoutComponent;
