import React from "react";
import { colors } from "../../utils/colors";
import Title from "../Title";

import { Container } from "./styles";

type Props = {
  title: string;
};

export default function SubHeader({ title }: Props) {
  return (
    <Container>
      <Title color={colors.text.light}>{title}</Title>
    </Container>
  );
}
