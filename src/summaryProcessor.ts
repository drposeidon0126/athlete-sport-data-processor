export interface Summary {
  userId: string;
  activityId: number;
  activityName: string;
  durationInSeconds: number;
  startTimeInSeconds: number;
  startTimeOffsetInSeconds: number;
  activityType: string;
  averageHeartRateInBeatsPerMinute: number;
  activeKilocalories: number;
  deviceName: string;
  maxHeartRateInBeatsPerMinute: number;
}

export function processSummary(summary: Summary) {
  return {
    userId: summary.userId,
    activityId: summary.activityId,
    activityName: summary.activityName,
    durationInSeconds: summary.durationInSeconds,
    startTimeInSeconds: summary.startTimeInSeconds,
    startTimeOffsetInSeconds: summary.startTimeOffsetInSeconds,
    activityType: summary.activityType,
    averageHeartRateInBeatsPerMinute: summary.averageHeartRateInBeatsPerMinute,
    activeKilocalories: summary.activeKilocalories,
    deviceName: summary.deviceName,
    maxHeartRateInBeatsPerMinute: summary.maxHeartRateInBeatsPerMinute,
  };
}
