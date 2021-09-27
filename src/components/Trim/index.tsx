import * as React from 'react';
import { Layout } from 'components/Trim/Layout';
import { Content } from 'components/Trim/Content';
import { Behaviour } from 'components/Trim/Behaviour';
import { Properties } from 'components/Trim/properties';
import { Context, useValue } from 'components/Trim/context';

const Trim = (props: Properties) => <Context.Provider value={useValue(props)}>
  <Behaviour/>
  <Layout>
    <Content/>
  </Layout>
</Context.Provider>

export default Trim;
