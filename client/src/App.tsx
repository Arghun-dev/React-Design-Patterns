import { useState } from "react";

import Layout from "./Layout";

import SplitScreen from "./LayoutComponents/SplitScreen/SplitScreen";
import LeftComponent from "./LayoutComponents/SplitScreen/LeftComponent";
import RightComponent from "./LayoutComponents/SplitScreen/RightComponent";

import List from "./LayoutComponents/Lists/List";
import SmallPersonListItem from "./LayoutComponents/Lists/people/SmallPersonListItem";
import LargePersonListItem from "./LayoutComponents/Lists/people/LargePersonListItem";
import { people } from "./LayoutComponents/Lists/data";

import Modal from "./LayoutComponents/Modal/Modal";

import User from "./HOC/User";
import { printProps } from "./HOC/printProps";
import { withUser } from "./HOC/withUser";

import Products from "./hooks/Products";

const UserWithProps = printProps(User);
const UserWithUser = withUser(User, "2");

const UserWithPropsAndUser = printProps(UserWithUser);

function App() {
  const [showModal, setShowModal] = useState(false);

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

      <div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div>This is My Modal component</div>
        </Modal>
      </div>

      <div>
        <h3>User With Props</h3>
        <UserWithProps name="arghun" age={28} />

        <h3>User With User and Props</h3>
        <UserWithPropsAndUser test="a" />
      </div>

      <div>
        <h3>Hooks Pattern</h3>
        <Products />
      </div>
    </Layout>
  );
}

export default App;
