import { RenderereOptions } from '../runtime-core/renderer';

export const nodeOps: RenderereOptions<Node> = {
  setElementText(node, text) {
    node.textContent = text;
  },
};
