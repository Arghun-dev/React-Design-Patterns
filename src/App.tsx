import Layout from "./Layout";

import SplitScreen from "./LayoutComponents/SplitScreen/SplitScreen";
import LeftComponent from "./LayoutComponents/SplitScreen/LeftComponent";
import RightComponent from "./LayoutComponents/SplitScreen/RightComponent";

function App() {
  return (
    <Layout>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftComponent message="Hey Hey :)" />
        <RightComponent name="This is Right component" />
      </SplitScreen>
    </Layout>
  );
}

export default App;
