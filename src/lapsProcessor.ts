export interface Lap {
  startTimeInSeconds: number;
  totalDistanceInMeters: number;
  timerDurationInSeconds: number;
  heartRateSamples: number[];
}

export function processLaps(laps: Lap[]): Lap[] {
  return laps.map((lap) => ({
    startTimeInSeconds: lap.startTimeInSeconds,
    totalDistanceInMeters: lap.totalDistanceInMeters,
    timerDurationInSeconds: lap.timerDurationInSeconds,
    heartRateSamples: [], 
  }));
}
