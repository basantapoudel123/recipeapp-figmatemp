<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-navigator";
  let mealInput;
  let loading = false;
  let recipes = [];
  let input;
  import FoodItemCard from "./FoodItemCard.svelte";

  async function fetchMeal(mealInput) {
    loading = true;
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${
        mealInput ? mealInput : ""
      }`
    )
      .then((res) => res.json())
      .then((res) => res?.meals)
      .catch((err) => console.log(err));
    loading = false;
    // console.log(response);

    recipes = response;
    console.log(recipes);
  }

  function handleEnterPress(e) {
    if (e.key === "Enter") {
      fetchMeal(mealInput);
    }
  }

  onMount(() => {
    fetchMeal();
    input.focus();
  });
</script>

<main>
  <div class="heading-div">
    <img
      src="../src/assets/arrow-left.png"
      alt="abc"
      on:click={() => navigate(-1)}
      on:keydown
    />
    <h2>Search recipes</h2>
  </div>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search recipe"
      bind:value={mealInput}
      on:keydown={handleEnterPress}
      bind:this={input}
    />
    <div class="setting-icon">
      <img src="../src/assets/setting-4.png" alt="abc" class="setting-icon" />
    </div>
  </div>
  <h3>Recent Search</h3>

  <div class="food-list">
    <FoodItemCard {recipes} {loading} />
  </div>
</main>

<style>
  main {
    width: 100%;
    padding-left: 10px;
  }
  .heading-div {
    width: 100%;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    margin: 20px 0;
    /* border: solid 1px black; */
  }

  .heading-div img {
    height: 20px;
    margin-top: 18px;
  }

  .heading-div h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-left: 30px;
    color: #181818;
    /* border: solid 1px black; */
    display: flex;
    flex: 1;
    justify-content: center;
    outline: none;
  }

  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .search-bar input {
    box-sizing: border-box;
    background: #ffffff;
    border: 1.3px solid #d9d9d9;
    border-radius: 10px;
    height: 40px;
    width: 255px;
    padding-left: 10px;
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
</style>
