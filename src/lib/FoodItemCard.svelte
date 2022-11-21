<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-navigator";
  export let recipes;
  export let loading;
  // let recipes = [];
  // async function fetchData() {
  //   const response = await fetch(
  //     "https://www.themealdb.com/api/json/v1/1/search.php?s="
  //   )
  //     .then((res) => res.json())
  //     .then((res) => res?.meals);

  //   recipes = response;
  //   console.log(recipes);
  // }

  // onMount(() => {
  //   fetchData();
  // });
</script>

<main>
  {#if !loading}
    {#if (recipes && recipes.length > 0) || recipes !== null}
      <div class="food-box" on:keydown>
        {#each recipes as recipe}
          <div
            class="food"
            on:click={() => navigate(`/search/${recipe.idMeal}`)}
            on:keydown
          >
            <img src={recipe.strMealThumb} alt="" />
            <h6>{recipe.strMeal}</h6>
            <p><b>Area: </b>{recipe.strArea}</p>
            <div class="gradient" />
          </div>
        {/each}
      </div>
    {:else}
      <div>Data Not Found</div>
    {/if}
  {:else}
    <div>loading..</div>
  {/if}
</main>

<style>
  .food-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 100%;
  }

  .gradient {
    z-index: 9999;
    width: inherit;
    height: inherit;
    color: black;
    position: absolute;
    top: 0;
    left: 0%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  }

  .food {
    width: 150px;
    height: 150px;
    /* background: blue; */
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  .food img {
    object-fit: contain;
    width: 150px;
    height: 150px;
  }

  .food h6,
  .food p {
    position: absolute;
    color: #ffffff;
    z-index: 99999;
  }

  h6 {
    top: 90px;
    width: 130px;
    height: 34px;
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    padding-left: 10px;
  }
  .food p {
    height: 12px;
    top: 135px;
    left: 10px;
    font-size: 1px;
    line-height: 6px;
    font-weight: 200;
    color: #a9a9a9;
  }
</style>
