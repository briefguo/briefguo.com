export interface AmapResponse {
  count: string;
  info: string;
  infocode: string;
  status: string;
  suggestion: { keywords: []; cities: [] };
  [key: string]: any;
}
