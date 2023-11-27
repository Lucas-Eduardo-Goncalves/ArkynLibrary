import { ArkynProvider } from "arkyn_components";
import { IntroductionClient } from "~/modules/base/Introduction";

export const meta = IntroductionClient.meta;

export default function () {
  return (
    <ArkynProvider>
      <IntroductionClient.View />
    </ArkynProvider>
  );
}
