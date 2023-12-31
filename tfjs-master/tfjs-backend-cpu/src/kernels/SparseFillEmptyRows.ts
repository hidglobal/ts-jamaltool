/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {KernelConfig, KernelFunc, SparseFillEmptyRows, SparseFillEmptyRowsInputs, TensorInfo, TypedArray} from '@tensorflow/tfjs-core';

import {MathBackendCPU} from '../backend_cpu';

import {sparseFillEmptyRowsImpl} from './SparseFillEmptyRows_impl';

export function sparseFillEmptyRows(args: {
  inputs: SparseFillEmptyRowsInputs,
  backend: MathBackendCPU
}): [TensorInfo, TensorInfo, TensorInfo, TensorInfo] {
  const {inputs, backend} = args;
  const {indices, values, denseShape, defaultValue} = inputs;
  if (denseShape.shape.length !== 1) {
    throw new Error(`Dense shape must be a vector, saw:
        ${denseShape.shape}`);
  }
  if (indices.shape.length !== 2) {
    throw new Error(`Indices must be a matrix, saw:
        ${indices.shape}`);
  }
  if (values.shape.length !== 1) {
    throw new Error(`Values must be a vector, saw:
        ${values.shape}`);
  }
  if (defaultValue.shape.length !== 0) {
    throw new Error(`Default value must be a scalar, saw:
        ${defaultValue.shape}`);
  }

  const $indices = backend.data.get(indices.dataId).values as TypedArray;
  const $values = backend.data.get(values.dataId).values as TypedArray;
  const $denseShape = backend.data.get(denseShape.dataId).values as TypedArray;
  const $defaultValue =
      backend.data.get(defaultValue.dataId).values[0] as number;

  const [outputIndices, outputIndicesShape, outputValues,
         emptyRowIndicator, reverseIndexMap] =
      sparseFillEmptyRowsImpl(
          $indices, indices.shape, indices.dtype, $values, values.dtype,
          $denseShape, $defaultValue);
  return [
    backend.makeTensorInfo(outputIndicesShape, indices.dtype, outputIndices),
    backend.makeTensorInfo(
        [outputIndicesShape[0]], values.dtype, outputValues),
    backend.makeTensorInfo(
        [emptyRowIndicator.length], 'bool',
        new Uint8Array(
            emptyRowIndicator.map((value: boolean) => Number(value)))),
    backend.makeTensorInfo(
        [reverseIndexMap.length], indices.dtype,
        new Int32Array(reverseIndexMap)),
  ];
}

export const sparseFillEmptyRowsConfig: KernelConfig = {
  kernelName: SparseFillEmptyRows,
  backendName: 'cpu',
  kernelFunc: sparseFillEmptyRows as unknown as KernelFunc,
};
