import { useQuery } from 'react-query';

import { KeyApi } from 'types/types';
import { ChartService } from './Chart.service';

export const useGetChart = () => {
  return useQuery({
    queryKey: KeyApi.CHART_LIST,
    queryFn: ChartService.getChart,
  });
};
