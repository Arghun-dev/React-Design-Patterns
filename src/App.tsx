import Layout from "./Layout";

import SplitScreen from "./LayoutComponents/SplitScreen/SplitScreen";
import LeftComponent from "./LayoutComponents/SplitScreen/LeftComponent";
import RightComponent from "./LayoutComponents/SplitScreen/RightComponent";

import List from "./LayoutComponents/Lists/List";
import SmallPersonListItem from "./LayoutComponents/Lists/people/SmallPersonListItem";
import LargePersonListItem from "./LayoutComponents/Lists/people/LargePersonListItem";
import { people } from "./LayoutComponents/Lists/data";

function App() {
  return (
    <Layout>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftComponent message="Hey Hey :)" />
        <RightComponent name="This is Right component" />
      </SplitScreen>

      <div>
        <h2>Small List</h2>
        <List
          resourceName="person"
          items={people}
          ItemComponent={SmallPersonListItem}
        />
        <div style={{ borderBottom: "1px solid white", margin: "64px 0" }} />
        <h2>Large List</h2>
        <List
          resourceName="person"
          items={people}
          ItemComponent={LargePersonListItem}
        />
      </div>
    </Layout>
  );
}

export default App;
