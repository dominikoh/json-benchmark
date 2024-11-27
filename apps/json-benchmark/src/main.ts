import fs from 'fs';
import Benchmarkify from 'benchmarkify';
import { Builder, ByteBuffer } from 'flatbuffers';
import { BimProgress as ProtobufBimProgress, BimProgressRequest as ProtobufBimProgressRequest } from '@json-benchmark/data-protobuf';
import { BimProgress as FlatBufferBimProgress } from '@json-benchmark/data-flatbuffer';

const jsonData = {
  "id": 1,
  "externalId": "1/0/1/0/0/51",
  "capturedAt": new Date("2024-02-03T13:08:14.000Z"),
  "completedAt": new Date("2024-02-03T13:08:14.000Z"),
  "levelId": 41823,
  "workflowId": 1,
  "bimId": 1
};
const jsonEncodedData = JSON.stringify(jsonData);

const protobufData = ProtobufBimProgress.fromObject(jsonData);
const protobufEncodedData = ProtobufBimProgress.encode(protobufData).finish();

const flatbufferBuilder = new Builder();
FlatBufferBimProgress.createBimProgress(
  flatbufferBuilder,
  jsonData.id,
  flatbufferBuilder.createString(jsonData.externalId),
  flatbufferBuilder.createString(jsonData.capturedAt.toISOString()),
  flatbufferBuilder.createString(jsonData.completedAt.toISOString()),
  jsonData.levelId,
  jsonData.workflowId,
  jsonData.bimId
);
const flatbufferData = flatbufferBuilder.asUint8Array();
const flatbufferEncodedData = FlatBufferBimProgress.getRootAsBimProgress(new ByteBuffer(flatbufferData));

const benchmark = new Benchmarkify("JSON Benchmark", { chartImage: true }).printHeader();
const options = { time: 1000 * 60 };

const fileSize = (path: string) => {
  const stats = fs.statSync(path);
  const fileSizeInBytes = stats.size;
  return (fileSizeInBytes / (1024 * 1024)).toFixed(2);
};

const saveJson = (count: number) => {
  const result = {
    version: 1,
    bim_progresses: []
  }
  for (let i = 0; i < count; i++) {
    result.bim_progresses.push(jsonData);
  }

  const filepath = "tmp/progress.json";
  fs.writeFileSync(filepath, JSON.stringify(result));
  return fileSize(filepath);
};

const saveProtobuf = (count: number) => {
  const bimProgresses = [];
  for (let i = 0; i < count; i++) {
    bimProgresses.push(protobufData);
  }
  const result = ProtobufBimProgressRequest.create({
    version: 1,
    bimProgresses: bimProgresses
  });

  const buffer = ProtobufBimProgressRequest.encode(result).finish();
  const filepath = "tmp/progress.protobuf";
  fs.writeFileSync(filepath, buffer);
  return fileSize(filepath);
};

const saveFlatbuffer = (count: number) => {
  const bimProgresses = [];
  for (let i = 0; i < count; i++) {
    bimProgresses.push(flatbufferData);
  }

  const filepath = "tmp/progress.flatbuffer";
  fs.writeFileSync(filepath, bimProgresses.join("\n"));
  return fileSize(filepath);
};

(async () => {
  await benchmark.createSuite("encoding", options)
    .add("JSON", () => JSON.stringify(jsonData))
    .add("Protobuf", () => ProtobufBimProgress.encode(protobufData).finish())
    .add("Flatbuffer", () => FlatBufferBimProgress.getRootAsBimProgress(new ByteBuffer(flatbufferData)))
    .run();

  await benchmark.createSuite("decoding", options)
    .add("JSON", () => JSON.parse(jsonEncodedData))
    .add("Protobuf", () => ProtobufBimProgress.decode(protobufEncodedData))
    .add("Flatbuffer", () => flatbufferBuilder.asUint8Array())
    .run();

  const count = 1000000;
  let startTime = Date.now();
  let fileSize = saveJson(count);
  console.log(`Save JSON file: ${Date.now() - startTime}ms, ${fileSize}MB`);

  startTime = Date.now();
  fileSize = saveProtobuf(count);
  console.log(`Save Protobuf file: ${Date.now() - startTime}ms, ${fileSize}MB`);

  startTime = Date.now();
  fileSize = saveFlatbuffer(count);
  console.log(`Save Flatbuffer file: ${Date.now() - startTime}ms, ${fileSize}MB`);
})();