// Google Forms used by welcome.html and bye.html (the extension opens those two pages on install / uninstall).
// Change a link here and push the site; the extension itself doesn't need a new build.
window.WISEBIRD_FORMS = {
  bye: "https://docs.google.com/forms/d/e/1FAIpQLSc0tImfYXtOwmFyi7IBvoTZfRLmEVpJTzifBgMuYH3DdCzrBQ/viewform",   // 「Wisebird 卸载反馈」
  // bye.html posts its own form to this Google Form. If a question is edited or replaced in Google Forms, its id changes:
  // re-read the ids (viewform page → FB_PUBLIC_LOAD_DATA_) and update them here; option texts must stay identical to bye.html
  byeFields: { why: "entry.1360155549", back: "entry.1922477741", contact: "entry.1210778526" },
  beta: "https://docs.google.com/forms/d/e/1FAIpQLSf6z2_KczjpnIhCeFjU7L1LH1TtKp7p-vethCE85jZ1o7-6NA/viewform",  // 「Wisebird 内测申请」
  betaPublic: false,   // true = the welcome page shows "不想填 Key？申请内置额度内测" (keep false during the hand-picked gray test)
};
