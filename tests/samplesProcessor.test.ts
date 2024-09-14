import { processSamples, Sample } from "../src/samplesProcessor";

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

test("processSamples should return processed heart rate samples", () => {
  const result = processSamples(mockSamples);

  expect(result.length).toBeGreaterThan(0);
  expect(result).toEqual(expect.arrayContaining([120, 122, 140])); 
});
