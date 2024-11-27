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
const options = { time: 1000 };

const saveJson = (count: number) => {
  const result = {
    version: 1,
    bim_progresses: []
  }
  for (let i = 0; i < count; i++) {
    result.bim_progresses.push(jsonData);
  }

  fs.writeFileSync("tmp/progress.json", JSON.stringify(result));
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
  fs.writeFileSync("tmp/progress.protobuf", buffer);
};

const saveFlatbuffer = (count: number) => {
  const bimProgresses = [];
  for (let i = 0; i < count; i++) {
    bimProgresses.push(flatbufferData);
  }

  fs.writeFileSync("tmp/progress.flatbuffer", bimProgresses.join("\n"));
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

  // TODO: change to 1000000
  const count = 100;
  await benchmark.createSuite("save file 1M data", { ...options, time: 1 })
    .add("JSON", () => saveJson(count))
    .add("Protobuf", () => saveProtobuf(count))
    .add("Flatbuffer", () => saveFlatbuffer(count))
    .run();
})();