import {Header} from 'components/Header';
import {Nav} from 'components/Nav';
import {Aside} from 'components/Aside';
import {Main} from 'components/Main';
import {Footer} from 'components/Footer';

export const Layout = (props: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <Header/>
      <Nav/>
      <Aside/>
      <Main>
        {props.children}
      </Main>
      <Footer/>
    </>
  );
};
