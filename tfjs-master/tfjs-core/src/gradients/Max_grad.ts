/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
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

import {Max, MaxAttrs} from '../kernel_names';
import {GradConfig, NamedAttrMap} from '../kernel_registry';
import {Tensor} from '../tensor';
import * as util from '../util';

import {gradForMinAndMax} from './min_max_grad_util';

export const maxGradConfig: GradConfig = {
  kernelName: Max,
  inputsToSave: ['x'],
  outputsToSave: [true],
  gradFunc: (dy: Tensor, saved: Tensor[], attrs: NamedAttrMap) => {
    const maxAttrs: MaxAttrs = attrs as unknown as MaxAttrs;
    const {reductionIndices} = maxAttrs;
    const x = saved[0];
    const y = saved[1];
    const origAxes = util.parseAxisParam(reductionIndices, x.shape);
    const maxGrad = gradForMinAndMax(dy, y, x, origAxes);
    return {
      x: () => {
        return maxGrad['x']();
      }
    };
  }
};
