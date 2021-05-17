import styled from "styled-components/native";

export const Container = styled.View`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
`;

export const ContentContainer = styled.View`
  padding: 24px;
  max-width: 600px;
  width: 100%;
`;

export const LectionGroupContainer = styled.View`
  flex: 1;
  align-self: center;
  flex-basis: auto;
`;

export const LectionGroupTitle = styled.Text`
  text-align: center;
  font-weight: bold;
  margin: 8px 0;
`;
