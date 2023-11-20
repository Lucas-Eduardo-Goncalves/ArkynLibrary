import { V1Client } from "~/modules/layout/V1";

export const links = V1Client.links;

export default function () {
  return <V1Client.View />;
}
