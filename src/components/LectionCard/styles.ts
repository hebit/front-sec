import styled from "styled-components/native";
import { colors } from "../../utils/colors";

type ContainerProps = Record<"active", boolean>;

export const Container = styled.View<ContainerProps>`
  background-color: ${(props) =>
    props.active ? colors.tintedCard.primary : colors.tintedCard.disabled};
  padding: 4px;
  border-radius: 8px;
  margin: 4px;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  flex-grow: 0;
  flex-basis: auto;
  flex-shrink: 0;
  height: 60px;
  flex-direction: column;
`;

export const StyledText = styled.Text`
  color: ${colors.text.light};
`;
