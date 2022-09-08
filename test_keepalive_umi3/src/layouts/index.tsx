import KeepAlive from 'react-fiber-keep-alive'
import { NavLink } from 'umi'

import type { IRouteComponentProps } from 'umi';

const root = document.getElementById('root');

const Index = ({ children }: IRouteComponentProps) => {
  return (
    <KeepAlive.Provider value={root}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', marginBottom: 30 }}>
          <NavLink to="/" style={{ marginRight: 12 }}>
            Index
          </NavLink>
          <NavLink to="/A" style={{ marginRight: 12 }}>
            A
          </NavLink>
          <NavLink to="/B">B</NavLink>
        </div>
        {children}
      </div>
    </KeepAlive.Provider>
  );
};

export default Index;
