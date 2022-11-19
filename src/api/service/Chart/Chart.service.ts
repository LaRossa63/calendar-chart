import { Axios } from 'api';
import { ResponseChartApi } from 'types/types';

export const ChartService = {
  async getChart(): Promise<ResponseChartApi> {
    return Axios.get('');
  },
};
