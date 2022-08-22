import {Layout} from 'components/Layout';
import {RandomAdviceForm} from 'components/advice/random/RandomAdviceForm';

export const Random = (): JSX.Element => {
  return (
    <Layout>
      <>
        <h1>Random</h1>
        <RandomAdviceForm/>
      </>
    </Layout>
  );
};
