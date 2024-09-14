import { processData } from "../src/dataProcessor";
import { Summary } from "../src/summaryProcessor";
import { Lap } from "../src/lapsProcessor";
import { Sample } from "../src/samplesProcessor";

const mockSummary: Summary = {
  userId: "1234567890",
  activityId: 9480958402,
  activityName: "Indoor Cycling",
  durationInSeconds: 3667,
  startTimeInSeconds: 1661158927,
  startTimeOffsetInSeconds: 7200,
  activityType: "INDOOR_CYCLING",
  averageHeartRateInBeatsPerMinute: 150,
  activeKilocalories: 561,
  deviceName: "instinct2",
  maxHeartRateInBeatsPerMinute: 190,
};

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

const mockSamples: Sample[] = [
  {
    "recording-rate": 5,
    "sample-type": "2",
    data: "120,126,122,140,142,155,145",
  },
  {
    "recording-rate": 5,
    "sample-type": "2",
    data: "141,147,155,160,180,152,120",
  },
];

test("processData should return a valid data structure with activity overview and processed laps", () => {
  const result = processData(mockSummary, mockLaps, mockSamples);

  expect(result.activityOverview).toEqual(mockSummary);
  expect(result.laps.length).toBe(2);
  expect(result.laps[0].heartRateSamples.length).toBeGreaterThan(0);
});
