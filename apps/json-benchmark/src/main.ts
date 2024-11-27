import Benchmarkify from 'benchmarkify';
import { BimProgress as ProtobufBimProgress } from '@json-benchmark/data-protobuf';

const jsonData = {
  "id": 1,
  "externalId": "1/0/1/0/0/51",
  "capturedAt": new Date("2024-02-03T13:08:14.000Z"),
  "completedAt": new Date("2024-02-03T13:08:14.000Z"),
  "levelId": 41823,
  "workflowId": 1,
  "bimId": 1
};
const stringData = JSON.stringify(jsonData);
const protobufData = ProtobufBimProgress.fromObject(jsonData);

const benchmark = new Benchmarkify("JSON Benchmark", { chartImage: true }).printHeader();
const options = { time: 1000 };

const appendJson = (count: number) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    JSON.parse(stringData);
  }
  return result;
};

const appendProtobuf = (count: number) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    ProtobufBimProgress.fromObject(protobufData);
  }
  return result;
};

(async () => {
  await benchmark.createSuite("encoding", options)
    .add("JSON", () => JSON.stringify(jsonData))
    .add("Protobuf", () => ProtobufBimProgress.toObject(protobufData))
    .run();

  await benchmark.createSuite("decoding", options)
    .add("JSON", () => JSON.parse(stringData))
    .add("Protobuf", () => ProtobufBimProgress.fromObject(protobufData))
    .run();

  await benchmark.createSuite("combined (encoding + decoding)", options)
    .add("JSON", () => JSON.parse(JSON.stringify(jsonData)))
    .add("Protobuf", () => ProtobufBimProgress.fromObject(ProtobufBimProgress.toObject(protobufData)))
    .run();

  const count = 1000000;
  await benchmark.createSuite("append 1M data", { ...options, time: 1 })
    .add("JSON", () => appendJson(count))
    .add("Protobuf", () => appendProtobuf(count))
    .run();
})()