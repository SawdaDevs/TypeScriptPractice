type BPValue = {
    systolic: number,
    diastolic: number,
}

type BPReading = {
  value: BPValue;
  timestamp: Date;
}

const mockReadings: BPReading[] = [
    {
      value: {
        systolic: 120,
        diastolic: 80,
      },
      timestamp: new Date('2022-07-10T12:00:00.000Z'),
    },
    {
      value: {
        systolic: 130,
        diastolic: 90,
      },
      timestamp: new Date('2022-07-12T12:00:00.000Z'),
    },
    {
      value: {
        systolic: 125,
        diastolic: 85,
      },
      timestamp: new Date('2022-07-14T12:00:00.000Z'),
    }
  ]

const calculateAverage = (readings: BPReading[]): BPValue => {
    if (readings.length === 0) return {
        systolic: 0,
        diastolic: 0
    }

    let sumDi = 0;
    let sumSys = 0;

    readings.forEach(reading =>{
        sumDi += reading.value.diastolic;
        sumSys += reading.value.systolic;
    })

    let meanDi = Math.round(sumDi/readings.length)
    let meanSys = Math.round(sumSys/readings.length)

    return {
        systolic: meanSys,
        diastolic: meanDi
    }
}
const calculateAverageOverTime = (readings: BPReading[], start: Date, end: Date): BPValue => {
    //filtering for the dates b/w start and end, inclusive of start and end

    const filteredReading = readings.filter(reading =>reading.timestamp>=start && reading.timestamp<=end)
    return calculateAverage(filteredReading);

}


console.log(calculateAverage(mockReadings, ));