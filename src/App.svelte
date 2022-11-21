<script>
  import { Router, Route, Link } from "svelte-navigator";
  import SearchItems from "./lib/SearchItems.svelte";
  import LandingPage from "./lib/LandingPage.svelte";
  import SignUp from "./lib/SignUp.svelte";
  import Home from "./lib/Home.svelte";
  import { miniAppInitializer } from "../miniSDK";
  import { onMount } from "svelte";
  import SignIn from "./lib/SignIn.svelte";
  import ItemDetails from "./lib/ItemDetails.svelte";
  let isLogin;
  let canRender;
  let errMsg;

  const handleInit = () => {
    miniAppInitializer()
      .then((user) => {
        if (user.user_profile) {
          console.log(user);
          isLogin = true;
          // getUserProfileData();
        }
        canRender = true;
      })
      .catch((e) => {
        errMsg = e.message;
        isLogin = false;
        canRender = false;
      });
  };

  onMount(() => {
    handleInit();
  });
</script>

<Router>
  <main>
    <!-- <Home /> -->
    <!-- <SignUp /> -->
    <!-- <LandingPage /> -->
    <!-- <SearchItems /> -->

    <Route path="/signin">
      <SignIn />
    </Route>

    <Route path="/">
      <LandingPage />
    </Route>

    <Route path="/signup">
      <SignUp />
    </Route>

    <Route path="/home">
      <Home />
    </Route>

    <Route path="/search">
      <SearchItems />
    </Route>
    <Route path="/search/:id">
      <ItemDetails />
    </Route>
  </main>
</Router>

<style>
</style>
