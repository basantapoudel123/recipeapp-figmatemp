<script>
  import { onMount } from "svelte";
  import { Link, navigate } from "svelte-navigator";
  import { loop_guard } from "svelte/internal";

  export let areaResult;
  export let currentArea;

  console.log(currentArea);

  $: currentArea, fetchCategoryData();

  let resultArea = [];

  async function fetchCategoryData() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${currentArea}`
    )
      .then((res) => res.json())
      .then((res) => res?.meals)
      .catch((err) => console.log(err));

    resultArea = response;
    console.log(resultArea);
  }

  onMount(() => {
    fetchCategoryData();
  });
</script>

<main>
  <div class="main-food-div">
    {#each resultArea as result}
      <div class="food-div">
        <div
          class="food-image"
          on:click={() => navigate(`/search/${result.idMeal}`)}
          on:keydown
        >
          <img src={result.strMealThumb} alt="" />

          <div class="rating">
            <img src="../src/assets/vector.png" alt="" />
            <span>4.5</span>
          </div>
        </div>
        <div class="food-description">
          <Link to={`/search/${result.idMeal}`}>
            <div class="food-name">{result?.strMeal}</div>
          </Link>
          <div class="time-div">
            Time
            <p>15 Mins</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="new-recipe-section">
    <h3>New Recipes</h3>
    <div class="new-recipe">
      <div class="front-section">
        <h4>Random Recipe</h4>
        <img src="../src/assets/vector.png" alt="" />
        <img src="../src/assets/vector.png" alt="" />
        <img src="../src/assets/vector.png" alt="" />
        <img src="../src/assets/vector.png" alt="" />
        <div class="recipe-maker">
          <img src="../src/assets/avatar.png" alt="" />
          <p>By James Miner</p>
        </div>
      </div>
      <div class="back-section">
        <img src="../src/assets/Rectangle 6.png" alt="" />
        <div class="time-section">
          <img src="../src/assets/timer.png" alt="" />
          <span>20 mins</span>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .main-food-div {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
    overflow: auto;
    scroll-behavior: none;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .food-div {
    position: relative;
  }
  .food-image {
    display: flex;
  }

  .food-name {
    font-size: 15px;
    font-weight: 600;
  }

  .time-div {
    font-size: 14px;
    margin-top: 10px;
  }

  .time-div > p {
    margin-top: 0;
  }
  .food-image img {
    width: 130px;
    height: 110px;
    border-radius: 50%;
  }

  .rating {
    display: flex;
    align-items: center;
    position: absolute;
    top: 40px;
    left: 100px;
    width: 40px;
    height: 20px;
    border-radius: 8px;
    background: rgb(227, 230, 92);
  }

  .rating img {
    width: 10px;
    height: 9px;
  }

  .new-recipe {
    position: relative;
    display: flex;
    background: #ffffff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    gap: 20px;
    width: 280px;
    height: 170px;
    border-radius: 10px;
    padding: 10px;
  }

  .recipe-maker {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .recipe-maker > img {
    height: 45px;
    width: 45px;
  }

  .recipe-maker p {
    font-size: 11px;
    color: #a9a9a9;
  }

  .back-section > img {
    position: absolute;
    width: 105px;
    height: 94px;
    top: -34px;
    border-radius: 50%;
  }
  .time-section {
    position: absolute;
    top: 64px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
    color: #a9a9a9;
    margin-left: 20px;
  }
</style>
