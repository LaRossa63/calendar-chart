import { LinksApi, ResponseChartApi } from 'types/types';

export const ChartService = {
  async getChart(): Promise<ResponseChartApi> {
    const response = await fetch(LinksApi.BASE_URL);
    const chart = await response.json();

    return chart;
  },
};
