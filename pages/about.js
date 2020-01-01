import Title from './components/common/Title';

import Layout from './components/HOC';

const About = () => {
  return (
    <>
    <p>About us page</p>
    <Title title="about us page props title">
      <h3>Sub Titles</h3>
    </Title>
    </>
  )
};

export default Layout(About);