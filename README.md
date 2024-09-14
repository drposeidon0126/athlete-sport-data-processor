# Athlete Sport Data Processor

## Overview
`athlete-sport-data-processor` is a TypeScript/JavaScript library designed to process data from professional athletes' sports computers. It loads and consolidates three different types of datasets (`Summary`, `Laps`, and `Samples`) into a unified JSON output. The data is cleaned, interpolated, and prepared for scientific analysis, including detailed heart rate samples.
This is Howard's solution for the test task

## Features
- **Data Loading**: Supports loading summary, lap, and sample data.
- **Heart Rate Processing**: Reverse aggregation and backward interpolation of heart rate samples.
- **Data Consolidation**: Combines summary, lap, and sample data into a comprehensive JSON file.
- **Outlier Handling**: Pre-processing includes identification and cleaning of outliers in the sample data.
- **Prediction Modeling**: Predicts the median of the next five heart rate tick values.
- **Test Coverage**: Achieves 80%+ test coverage with unit and integration tests.
- **Error Metric**: Uses **Mean Absolute Error (MAE)** to validate the model predictions.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/drposeidon0126/athlete-sport-data-processor.git
    ```

2. Navigate to the project directory:
    ```bash
    cd athlete-sport-data-processor
    ```

3. Install dependencies:
    ```bash
    npm install
    ```
4. Run
    ```bash
    npm start
5. Test
   ```bash
   npm test