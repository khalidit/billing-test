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
      <div>{content}</div>
      {footer}
    </>
  );
};

export default AppLayoutComponent;
