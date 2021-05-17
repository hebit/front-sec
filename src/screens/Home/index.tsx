import React, { useMemo } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { format } from "date-fns";
import Card from "../../components/Card";
import SubHeader from "../../components/SubHeader";
import { getDB, getGroupedLections, getSchool } from "../../store/db";
import LectionCard from "../../components/LectionCard";
import Divider from "../../components/Divider";

import {
  Container,
  ContentContainer,
  LectionGroupContainer,
  LectionGroupTitle,
} from "./styles";

function countLeftLections(lections: number) {
  const leftLections = 5 - lections;
  const leftLectionsArr = Array.from({
    length: leftLections < 0 ? 0 : leftLections,
  });
  return leftLectionsArr;
}

export default function Home() {
  const db = useMemo(getDB, []);
  const school = useMemo(getSchool, []);
  const groupedLections = useMemo(getGroupedLections, []);

  return (
    <Container>
      <SubHeader title={school} />
      <ContentContainer>
        <Card>
          <Card.Header
            title={format(db.data, "dd/MM/yyy")}
            rightContent={
              <FontAwesome5 name="calendar-alt" size={24} color="black" />
            }
          />
          {groupedLections.map(({ dataInfo, aulas }, idx, groups) => {
            const nextGroup = groups[idx + 1];
            const leftLectionsArr = countLeftLections(aulas.length);
            return (
              <React.Fragment key={idx}>
                <LectionGroupContainer>
                  <LectionGroupTitle>
                    {dataInfo.diaSemanaString} &gt; {dataInfo.dataSemana} &gt;{" "}
                    {dataInfo.turnoString}
                  </LectionGroupTitle>
                  <ScrollView
                    horizontal={true}
                    style={{ flexBasis: 80, flexGrow: 0 }}
                    contentContainerStyle={{
                      paddingLeft: 12,
                      alignItems: "flex-start",
                      width: "100%",
                    }}
                  >
                    {aulas.map((aula) => (
                      <LectionCard key={aula.id} turma={aula.turma} />
                    ))}
                    {leftLectionsArr.map((_, idx) => (
                      <LectionCard
                        key={`hv-${dataInfo.dataSemana}-${dataInfo.turno}-${idx}`}
                        active={false}
                      />
                    ))}
                  </ScrollView>
                </LectionGroupContainer>
                {nextGroup &&
                  nextGroup.dataInfo.dataSemana !== dataInfo.dataSemana && (
                    <Divider />
                  )}
              </React.Fragment>
            );
          })}
        </Card>
      </ContentContainer>
    </Container>
  );
}
