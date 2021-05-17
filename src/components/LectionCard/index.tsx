import React from "react";
import { Container, StyledText } from "./styles";

type LectionCardProps =
  | {
      turma: string;
      active?: true;
    }
  | {
      active: false;
      turma?: undefined;
    };

function LectionCard({ active = true, turma }: LectionCardProps) {
  const labels = turma?.split("-") ?? "Horário Vago".split(" ");
  return (
    <Container active={active}>
      {labels.map((label, idx) => (
        <StyledText key={idx}>{label}</StyledText>
      ))}
    </Container>
  );
}

export default LectionCard;
