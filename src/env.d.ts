/// <reference types="astro/client" />

declare module "*.svg" {
  const content: {
    src: string;
  };
  export default content;
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
