/**
 * This tells TypeScript that whenever a file with a .svg
 * extension is imported, it should apply the following types.
 */
declare module "*.svg" {
  import Raect = require("react");
  // This exports an SVG file as a React component. So, when you import an .svg file,
  // you can use it as a component in JSX. For example:
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
