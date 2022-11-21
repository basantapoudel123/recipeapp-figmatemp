<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-navigator";
  import FoodList from "./FoodList.svelte";
  let areaInput = "";
  let areaResult = [];
  let currentIndex = 0;
  let currentArea = "American";

  let { user_profile } = JSON.parse(localStorage.getItem("mini-app-profile"));
  console.log(user_profile);

  async function fetchCategory() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    )
      .then((res) => res.json())
      .then((res) => res?.meals)
      .catch((err) => console.log(err));

    areaResult = response;
    console.log(areaResult);
  }

  function handleCurrentIndexChange(idx, area) {
    currentIndex = idx;

    currentArea = area;

    console.log(currentIndex, currentArea);
  }

  async function handleLogout() {
    try {
      const res = await window?.miniapp.logout();
      if (res) navigate("/signin");
    } catch (err) {
      console.log(err);
    }
  }

  onMount(() => {
    const currentUser = localStorage.getItem("access-token");
    if (!currentUser) navigate("/signin");
    else fetchCategory();
  });

  function handleEnterPress(e) {
    if (e.key === "Enter") {
      fetchCategory();
    }
  }
</script>

<main>
  <div class="top-section">
    <div class="greeting">
      <h1>Hello, {user_profile?.display_name}</h1>
      <p>What are you cooking today?</p>
    </div>
    <div class="avatar">
      <button on:click={handleLogout}>
        <img src={user_profile?.photo_url} alt="" /></button
      >
    </div>
  </div>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search recipe"
      bind:value={areaInput}
      on:keydown={handleEnterPress}
      on:focus={() => navigate("/search")}
    />
    <!-- <button on:click={() => navigate("/search")}>Search By Name</button> -->
    <div class="setting-icon">
      <img src="../src/assets/setting-4.png" alt="abc" class="setting-icon" />
    </div>
  </div>
  <div class="categories">
    {#each areaResult as area, idx}
      <ul>
        <li>
          <button
            class={currentIndex === idx ? "active" : ""}
            on:click={() => handleCurrentIndexChange(idx, area?.strArea)}
            >{area?.strArea}</button
          >
        </li>
      </ul>
    {/each}
  </div>

  <FoodList {areaResult} {currentArea} />
</main>

<style>
  main {
    padding-left: 30px;
  }

  .top-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .greeting {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .greeting h1 {
    margin-bottom: 5px;
  }

  .greeting p {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    margin-top: 5px;
    color: #a9a9a9;
  }
  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 30px;
  }

  .search-bar input {
    box-sizing: border-box;
    background: #ffffff;
    border: 1.3px solid #d9d9d9;
    border-radius: 10px;
    height: 40px;
    width: 255px;
  }
  .setting-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    background: rgb(29, 85, 52);
    height: 40px;
    border-radius: 5px;
  }
  .setting-icon img {
    height: 20px;
    width: 25px;
  }
  .avatar {
    margin-right: 20px;
  }
  .avatar,
  .avatar > button {
    width: 40px;
    height: 40px;
  }
  .avatar > button {
    border: none;
    background: transparent;
  }

  .avatar img {
    width: 40px;
    height: 40px;
    /* left: 305px;
    top: 70px; */
    background: rgb(255, 206, 128);
    border-radius: 10px;
  }

  .categories {
    display: flex;
    flex-direction: row;

    margin-top: 30px;
    overflow: auto;
    scroll-behavior: none;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .categories::-webtik-scrollbar {
    display: none;
  }

  .categories ul {
    display: flex;
    flex-direction: row;
    padding: 7px 0px;
    /* width: 64px; */
    height: 31px;
    border: none;
  }

  .categories ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    color: #000000;
    padding: 7px 15px;
  }

  .categories ul li button {
    border: none;
    background: transparent;
    height: 25px;
    border-radius: 5px;
  }

  .categories ul li button.active {
    background: #23755d;
    color: #ffffff;
  }
</style>
