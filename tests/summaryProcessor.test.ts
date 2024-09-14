import { processSummary, Summary } from "../src/summaryProcessor";

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

test("processSummary should return the correct processed summary data", () => {
  const result = processSummary(mockSummary);

  expect(result).toEqual({
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
  });
});
