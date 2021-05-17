import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Container = styled.View`
  background-color: ${colors.background.default};
  border-radius: 8px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const HeaderContainer = styled.View`
  background-color: ${colors.background.secondary};
  border-radius: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 12px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderSideContentContainer = styled.View`
  width: 24px;
`;
