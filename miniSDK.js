export function miniAppInitializer() {
  const CLIENT_ID = "test-ma-2";
  window.miniapp = new window.hamromini_sdkjs.MiniApp();

  return new Promise(async (resolutionFunc, rejectionFunc) => {
    try {
      let userDetails = await window.hamromini_sdkjs.initialize(
        CLIENT_ID,
        window.miniapp
      );
      resolutionFunc(userDetails);
      // if(window.pathname.href === "/login") && userDetails) {
      //   window.location.href("/home");
    } catch (e) {
      rejectionFunc(e);
    }
  });
}
