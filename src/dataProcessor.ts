import { processSummary, Summary } from "./summaryProcessor";
import { processLaps, Lap } from "./lapsProcessor";
import { processSamples, Sample } from "./samplesProcessor";

export function processData(summary: Summary, laps: Lap[], samples: Sample[]) {
  const activityOverview = processSummary(summary);
  const processedLaps = processLaps(laps);
  const heartRateSamples = processSamples(samples);

  processedLaps.forEach((lap) => {
    lap.heartRateSamples = heartRateSamples;
  });

  return {
    activityOverview,
    laps: processedLaps,
  };
}
