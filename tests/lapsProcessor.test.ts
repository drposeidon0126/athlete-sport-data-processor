import { processLaps, Lap } from "../src/lapsProcessor";

const mockLaps: Lap[] = [
  {
    startTimeInSeconds: 1661158927,
    totalDistanceInMeters: 15,
    timerDurationInSeconds: 600,
    heartRateSamples: [],
  },
  {
    startTimeInSeconds: 1661158929,
    totalDistanceInMeters: 30,
    timerDurationInSeconds: 900,
    heartRateSamples: [],
  },
];

test("processLaps should return processed lap data", () => {
  const result = processLaps(mockLaps);

  expect(result).toEqual([
    {
      startTimeInSeconds: 1661158927,
      totalDistanceInMeters: 15,
      timerDurationInSeconds: 600,
      heartRateSamples: [],
    },
    {
      startTimeInSeconds: 1661158929,
      totalDistanceInMeters: 30,
      timerDurationInSeconds: 900,
      heartRateSamples: [],
    },
  ]);
});
