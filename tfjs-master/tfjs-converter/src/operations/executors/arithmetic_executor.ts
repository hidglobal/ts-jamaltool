/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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

import {Tensor} from '@tensorflow/tfjs-core';
// tslint:disable-next-line: no-imports-from-dist
import * as tfOps from '@tensorflow/tfjs-core/dist/ops/ops_for_converter';

import {NamedTensorsMap} from '../../data/types';
import {ExecutionContext} from '../../executor/execution_context';
import {InternalOpExecutor, Node} from '../types';

import {getParamValue} from './utils';

export const executeOp: InternalOpExecutor =
    (node: Node, tensorMap: NamedTensorsMap,
     context: ExecutionContext, ops = tfOps): Tensor[] => {
      switch (node.op) {
        case 'BiasAdd':
        case 'AddV2':
        case 'Add': {
          return [ops.add(
              (getParamValue('a', node, tensorMap, context) as Tensor),
              getParamValue('b', node, tensorMap, context) as Tensor)];
        }
        case 'AddN': {
          return [ops.addN((
              getParamValue('tensors', node, tensorMap, context) as Tensor[]))];
        }
        case 'FloorMod':
        case 'Mod':
          return [ops.mod(
              getParamValue('a', node, tensorMap, context) as Tensor,
              getParamValue('b', node, tensorMap, context) as Tensor)];
        case 'Mul':
          return [ops.mul(
              getParamValue('a', node, tensorMap, context) as Tensor,
              getParamValue('b', node, tensorMap, context) as Tensor)];
        case 'RealDiv':
        case 'Div': {
          return [ops.div(
              getParamValue('a', node, tensorMap, context) as Tensor,
              getParamValue('b', node, tensorMap, context) as Tensor)];
        }
        case 'DivNoNan': {
          return [ops.divNoNan(
              getParamValue('a', node, tensorMap, context) as Tensor,
              getParamValue('b', node, tensorMap, context) as Tensor)];
        }
        case 'FloorDiv': {
          return [ops.floorDiv(
              getParamValue('a', node, tensorMap, context) as Tensor,
              getParamValue('b', node, tensorMap, context) as Tensor)];
        }
        case 'Sub': {
          return [ops.sub(
              getParamValue('a', node, tensorMap, context) as Tensor,
              getParamValue('b', node, tensorMap, context) as Tensor)];
        }
        case 'Minimum': {
          return [ops.minimum(
              getParamValue('a', node, tensorMap, context) as Tensor,
              getParamValue('b', node, tensorMap, context) as Tensor)];
        }
        case 'Maximum': {
          return [ops.maximum(
              getParamValue('a', node, tensorMap, context) as Tensor,
              getParamValue('b', node, tensorMap, context) as Tensor)];
        }
        case 'Pow': {
          return [ops.pow(
              getParamValue('a', node, tensorMap, context) as Tensor,
              getParamValue('b', node, tensorMap, context) as Tensor)];
        }
        case 'SquaredDifference': {
          return [ops.squaredDifference(
              getParamValue('a', node, tensorMap, context) as Tensor,
              getParamValue('b', node, tensorMap, context) as Tensor)];
        }
        default:
          throw TypeError(`Node type ${node.op} is not implemented`);
      }
    };

export const CATEGORY = 'arithmetic';
