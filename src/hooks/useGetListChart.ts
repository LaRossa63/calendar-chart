import { useEffect, useState } from 'react';
import { useGetChart } from 'api/service/Chart';
import { ResponseChartApi } from 'types/types';

export const useGetListChart = () => {
  const { data } = useGetChart();
  const [currentList, setCurrentList] = useState<ResponseChartApi>();

  const taskFields = {
    id: 'id',
    name: 'title',
    startDate: 'period_start',
    endDate: 'period_end',
    duration: 'duration',
    child: 'sub',
  };

  const filterListChart = (array: any) => {
    if (array.chart) {
      array.chart.period_start = new Date(array.chart.period_start);
      array.chart.period_end = new Date(array.chart.period_end);

      filterListChart(array.chart);
    }

    if (array.sub) {
      array.sub.forEach((element: any) => {
        const startUnix = Math.floor(
          new Date(element.period_start).getTime() / 1000
        );
        const endUnix = Math.floor(
          new Date(element.period_end).getTime() / 1000
        );

        delete element.period_end;
        element.period_start = new Date(element.period_start);
        element.duration = Math.abs(startUnix - endUnix) / 86400;

        filterListChart(element);
      });
    }
  };

  useEffect(() => {
    if (!data) {
      return;
    }

    filterListChart(data);

    setCurrentList(data);
  }, [data]);

  const toolbarClick = () => {
    // console.log('export');
    // let ganttInst: GanttComponent | null;
    // (ganttInst as GanttComponent).pdfExport();
  };

  return { toolbarClick, taskFields, currentList };
};
