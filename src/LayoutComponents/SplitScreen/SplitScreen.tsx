import styled from "styled-components";

interface SplitScreenProps {
  children: React.ReactElement[];
  leftWeight?: number;
  rightWeight?: number;
}

interface PaneProps {
  weight: number;
}

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div<PaneProps>`
  flex: ${(props) => props.weight};
`;

const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: SplitScreenProps) => {
  const [left, right] = children;
  return (
    <>
      <h2>Split Screen</h2>
      <Container>
        <Pane weight={leftWeight}>{left}</Pane>
        <Pane weight={rightWeight}>{right}</Pane>
      </Container>
    </>
  );
};

export default SplitScreen;
