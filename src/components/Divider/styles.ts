import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Divider = styled.View`
  height: 1px;
  width: 94%;
  align-self: center;
  opacity: 0.6;
  background-color: ${colors.text.default};
  margin-bottom: 4px;
`;
