import React from "react";
import { View, ViewProps } from "react-native";
import Title from "../Title";

import {
  Container,
  HeaderContainer,
  HeaderSideContentContainer,
} from "./styles";

type CardProps = ViewProps & {
  children?: JSX.Element | JSX.Element[] | null | any;
};

const Card = (props: CardProps) => {
  return <Container {...props} />;
};

type CardHeaderProps = {
  leftContent?: JSX.Element;
  title: string;
  rightContent?: JSX.Element;
};

export function CardHeader(props: CardHeaderProps) {
  return (
    <HeaderContainer>
      <HeaderSideContentContainer>
        {props.leftContent}
      </HeaderSideContentContainer>

      <View style={{ flexGrow: 1 }}>
        <Title>{props.title}</Title>
      </View>

      <HeaderSideContentContainer>
        {props.rightContent}
      </HeaderSideContentContainer>
    </HeaderContainer>
  );
}
Card.Header = CardHeader;

export default Card;
