import { Region, screen } from "@potatoranch/nut-js";

(async () => {
  await screen.highlight(new Region(100, 200, 300, 400));
})();
