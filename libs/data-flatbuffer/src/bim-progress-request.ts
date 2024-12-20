// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { BimProgress } from './bim-progress.js';


export class BimProgressRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):BimProgressRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsBimProgressRequest(bb:flatbuffers.ByteBuffer, obj?:BimProgressRequest):BimProgressRequest {
  return (obj || new BimProgressRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsBimProgressRequest(bb:flatbuffers.ByteBuffer, obj?:BimProgressRequest):BimProgressRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new BimProgressRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

version():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

bimProgresses(index: number, obj?:BimProgress):BimProgress|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new BimProgress()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

bimProgressesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startBimProgressRequest(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addVersion(builder:flatbuffers.Builder, version:number) {
  builder.addFieldInt32(0, version, 0);
}

static addBimProgresses(builder:flatbuffers.Builder, bimProgressesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, bimProgressesOffset, 0);
}

static createBimProgressesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startBimProgressesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endBimProgressRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createBimProgressRequest(builder:flatbuffers.Builder, version:number, bimProgressesOffset:flatbuffers.Offset):flatbuffers.Offset {
  BimProgressRequest.startBimProgressRequest(builder);
  BimProgressRequest.addVersion(builder, version);
  BimProgressRequest.addBimProgresses(builder, bimProgressesOffset);
  return BimProgressRequest.endBimProgressRequest(builder);
}
}
