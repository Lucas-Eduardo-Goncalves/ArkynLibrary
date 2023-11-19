import { RootClient } from "./modules/layout/Root";

export const links = RootClient.links;
export const meta = RootClient.meta;

export default function () {
  return <RootClient.View />;
}
