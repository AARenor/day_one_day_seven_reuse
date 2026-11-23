# Day one, day seven: the same make.fun ad, entered again

[![make.fun · day one, day seven](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/AARenor/day_one_day_seven_reuse/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/AARenor/day_one_day_seven_reuse/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

Posted video: https://www.tiktok.com/@arlearonreidma930/video/7711246553779948822

The video file was made on 22 November 2026 for an earlier make.fun ad bounty, and it was posted again on
23 November 2026 at 06:15Z from @arlearonreidma930, after this bounty opened. Its caption carries `$20 bounty`,
make.fun written out, and the play code `makefun-beach-jetty-flint`. The video file itself is unchanged.

`main.ts` is the entry program (Node 22, standard library only): it copies `VIDEO.json` from the repository root,
or from `$MAKEFUN_BOT_DIR` when set, to `/output/VIDEO.json`, or to `$MAKEFUN_OUTPUT_DIR` when set, creating the
output directory if needed. `VIDEO.json` names the posted video. Try it locally with:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
