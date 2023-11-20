import { IntroductionClient } from "~/modules/base/Introduction";

export const links = IntroductionClient.links;
export const meta = IntroductionClient.meta;

export default function () {
  return <IntroductionClient.View />;
}
