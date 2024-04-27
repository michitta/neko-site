import { userAgent } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { os } = userAgent(request);

  let url =
    "https://github.com/michitta/updates-neko-launcher-yami/releases/latest";

  if (os.name?.includes("Win"))
    url =
      "https://github.com/michitta/updates-neko-launcher-yami/releases/latest/download/yami-launcher.exe";
  else if (os.name?.includes("Mac"))
    url =
      "https://github.com/michitta/updates-neko-launcher-yami/releases/latest/download/yami-launcher.dmg";
  else if (os.name?.includes("Linux"))
    url =
      "https://github.com/michitta/updates-neko-launcher-yami/releases/latest/download/yami-launcher.AppImage";

  return Response.redirect(url);
}
