export interface Sample {
  "recording-rate": number;
  "sample-type": string;
  data: string;
}
//remove outliers(expected result doesnt include null value)
function removeOutliers(data: (number | null)[]): (number | null)[] {
  const validData = data.filter((d) => d !== null) as number[];
  if (validData.length === 0) return data;

  const mean = validData.reduce((acc, val) => acc + val, 0) / validData.length;
  const stdDev = Math.sqrt(
    validData
      .map((val) => Math.pow(val - mean, 2))
      .reduce((acc, val) => acc + val, 0) / validData.length
  );
  return data.map((d) =>
    d !== null && Math.abs(d - mean) > 2 * stdDev ? null : d
  );
}

// interpolate
function interpolateHeartRates(
  data: (number | null)[],
  recordingRate: number
): number[] {
  const interpolatedData: number[] = [];
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] !== null && data[i + 1] !== null) {
      let step = (data[i + 1]! - data[i]!) / recordingRate;
      for (let j = 0; j < recordingRate; j++) {
        interpolatedData.push(data[i]! + step * j);
      }
    }
  }
  return interpolatedData;
}

export function processSamples(samples: Sample[]) {
  const heartRateSamples: number[] = [];

  samples.forEach((sample) => {
    if (sample["sample-type"] === "2") {
      let heartRates = sample.data
        .split(",")
        .map((hr) => (hr !== "null" ? parseInt(hr) : null));
      heartRates = removeOutliers(heartRates);
      heartRateSamples.push(
        ...interpolateHeartRates(heartRates, sample["recording-rate"])
      );
    }
  });

  return heartRateSamples;
}
