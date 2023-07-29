import styled from "styled-components";

interface LayoutProps {
  children: React.ReactElement[] | React.ReactElement;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 48px auto;
`;

const Pane = styled.div`
  border-bottom: 1px solid white;
  padding: 24px;
`;

const Layout = ({ children }: LayoutProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <Container>
      {childrenArray.map((child, i) => (
        <Pane key={i}>{child}</Pane>
      ))}
    </Container>
  );
};

export default Layout;
