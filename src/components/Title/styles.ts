import { TextStyle } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../utils/colors";

type TitleProps = TextStyle;

export const Title = styled.Text<TitleProps>`
  text-align: center;
  font-size: ${(p) => p.fontSize ?? "14px"};
  font-weight: ${(p) => p.fontWeight ?? "700"};
  text-transform: capitalize;
  color: ${(p) => (p.color as string) ?? colors.text.default};
`;
