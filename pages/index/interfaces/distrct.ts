import { AmapResponse } from '@/api/amap/interfaces/response';

export interface Distrct {
  adcode: string;
  center: string;
  citycode: [];
  districts: Distrct[];
  level: string;
  name: string;
}

export interface DistrctResponse extends AmapResponse {
  districts: Distrct[];
}
