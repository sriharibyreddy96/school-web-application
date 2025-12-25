import React from "react";
import styled from "styled-components";

// Styled Components
const CurriculumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  flex-wrap: wrap; /* To make it responsive */
  background-color:#30CDD7;
`;

const LeftSide = styled.div`
  flex: 1;
  max-width: 45%;
  padding: 20px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RightSide = styled.div`
  flex: 1;
  max-width: 45%;
  padding: 20px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #003057;
  border: none;
`;

const HighlightsSection = styled.div`
  display: flex;
  justify-content: space-between;
//   flex-wrap: wrap;
  gap: 20px;
`;

const HighlightItem = styled.div`
  flex: 1 1 calc(33.33% - 20px);
  text-align: center;
  padding: 10px;
  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const ChoiceOfCurriculumSection = styled.div`
  padding: 10px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #B4EBF5;
  color: black;
  padding: 10px;
  border: 1.5px solid white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #36D7E1;
  }
  &:nth-child(odd) {
    background-color: #30CDD7;
  }
`;

const TableData = styled.td`
  padding: 10px;
  border: 1.5px solid white;
  text-align: center;
`;

const Curriculum = () => {
  return (
    <CurriculumContainer>
      {/* Left Side - Highlights Section */}
      <LeftSide>
        <Heading>Highlights</Heading>
        <HighlightsSection>
          {/* First Column of Icons */}
          <HighlightItem>
            <Icon>📚</Icon>
            <h3>Age Range</h3>
            <p>3 - 17</p>
          </HighlightItem>
          <HighlightItem>
            <Icon>🌍</Icon>
            <h3>Curriculum</h3>
            <p>IB, CBSE</p>
          </HighlightItem>
          <HighlightItem>
            <Icon>🎓</Icon>
            <h3>Expert Faculty</h3>
            <p>Day School</p>
          </HighlightItem>
        </HighlightsSection>

        <HighlightsSection>
          {/* Second Column of Icons */}
          <HighlightItem>
            <Icon>💻</Icon>
            <h3>Average calss size</h3>
            <p>20</p>
          </HighlightItem>
          <HighlightItem>
            <Icon>🎨</Icon>
            <h3>Nationalities</h3>
            <p>20+</p>
          </HighlightItem>
          <HighlightItem>
            <Icon>⚽</Icon>
            <h3>Languages offered</h3>
            <p>FRENCH, SPANISH, HINDI, TELUGU</p>
          </HighlightItem>
        </HighlightsSection>
      </LeftSide>

      {/* Right Side - Choice of Curriculum Section */}
      <RightSide>
        <Heading>Choice of Curriculum</Heading>
        <ChoiceOfCurriculumSection>
          <Table>
            <thead>
              <tr>
                <TableHeader>Grade</TableHeader>
                <TableHeader>Choice of Curriculum</TableHeader>
              </tr>
            </thead>
            <tbody>
              <TableRow>
                <TableData>Nursary - 5th Grade</TableData>
                <TableData>IB Primary Years Programme</TableData>
              </TableRow>
              <TableRow>
                <TableData>6th - 10th Grade</TableData>
                <TableData>IB Middle Years Programme</TableData>
              </TableRow>
              <TableRow>
                <TableData>7th - 12th Grade</TableData>
                <TableData>CBSE Programme</TableData>
              </TableRow>
              <TableRow>
                <TableData>11th - 12th Grade</TableData>
                <TableData>IB Diploma Programme</TableData>
              </TableRow>
              
              <TableRow>
                <TableData colSpan="2">Fee - 3.6 Lakhs to 10.5Lakhs <p>(This is a fee range and varies basis the grade $ curriculum )</p></TableData>
              </TableRow>
            </tbody>
          </Table>
        </ChoiceOfCurriculumSection>
      </RightSide>
    </CurriculumContainer>
  );
};

export default Curriculum;
