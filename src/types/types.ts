export enum LinksApi {
  BASE_URL = 'http://82.202.204.94/tmp/test.php',
}

interface Sub {
  id: number;
  title: string;
  period_start: string;
  period_end: string;

  sub?: Sub[];
}

export interface ResponseChartApi {
  project: string;
  period: string;

  chart: {
    id: number;
    title: string;
    period_start: string;
    period_end: string;

    sub: Sub[];
  };
}

export enum KeyApi {
  CHART_LIST = 'chart_list',
}
