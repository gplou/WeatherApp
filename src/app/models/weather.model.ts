export interface Weather {
  temperature: number;
  maxTemperature: number;
  minTemperature: number;
  windSpeed: number;
  description: string;
  humidity?: string;
  datetime?: Date;
  img: string;
}
