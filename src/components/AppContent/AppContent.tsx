import React, { useEffect } from 'react';
import './index.css';
import {
  GanttComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Edit,
  Selection,
  Toolbar,
  PdfExport,
} from '@syncfusion/ej2-react-gantt';
import { useGetListChart } from 'hooks';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #262842;

  margin-bottom: 20px;
`;

export const AppContent = () => {
  const { toolbarClick, taskFields, currentList } = useGetListChart();

  if (!currentList) {
    return <Title>Загрузка....</Title>;
  }

  return (
    <Container>
      <Title>
        {currentList.project} / {currentList.period}
      </Title>

      <GanttComponent
        dataSource={[currentList.chart]}
        taskFields={taskFields}
        allowPdfExport={true}
        toolbar={['PdfExport']}
        toolbarClick={toolbarClick}
      >
        <ColumnsDirective>
          <ColumnDirective field="title" headerText="Work item" />
        </ColumnsDirective>
        <Inject services={[Edit, Selection, Toolbar, PdfExport]} />
      </GanttComponent>
    </Container>
  );
};
