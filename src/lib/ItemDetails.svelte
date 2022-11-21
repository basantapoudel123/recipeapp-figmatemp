<script>
  import { afterUpdate, onMount } from "svelte";
  import { navigate } from "svelte-navigator";

  let isIngredient = true;
  let isProcudure = false;
  let singleItem = {};
  let instructions = [];
  async function fetchSingleItem(id = "") {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((res) => res.json())
      .then((res) => res?.meals)
      .catch((err) => console.log(err));

    singleItem = response[0];
    console.log("singleItem is -->", singleItem);
  }

  // function filterIngredient() {
  //   let filteredIngd = singleItem.search("/srcIngredient/");
  //   console.log(filteredIngd);
  // }

  onMount(() => {
    const pathArray = window.location.pathname.split("/");
    const itemIdFromUrl = pathArray[pathArray.length - 1];
    fetchSingleItem(itemIdFromUrl);
  });

  function getInstructionSteps() {
    const singleInstruction = singleItem?.strInstructions;
    if (singleInstruction) {
      let instructionsArray = singleInstruction.split(`.\r`);
      instructions = instructionsArray;
    }
  }

  afterUpdate(() => {
    getInstructionSteps();
    // filterIngredient();
  });

  function handleIngredientClick() {
    isIngredient = true;
    isProcudure = false;
  }

  function handleProcedureClick() {
    isIngredient = false;
    isProcudure = true;
  }
</script>

<main>
  <div class="navigate-button">
    <div class="arrow-button" on:click={() => navigate(-1)} on:keydown>
      <img src="../src/assets/arrow-left.png" alt="" />
    </div>
    <div class="three-dots">
      <img src="../src/assets/Union1.png" alt="" />
    </div>
  </div>

  <div class="recipe-image">
    <img src={singleItem?.strMealThumb} alt="" />
    <div class="rating">
      <img src="../src/assets/vector.png" alt="" />
      <span>4.5</span>
    </div>
    <div class="time-div">
      Time:
      <p>15 Mins</p>
    </div>
  </div>

  <div class="recipe-title">
    <h3>{singleItem?.strMeal}</h3>
    <p>(13k Reviews)</p>
  </div>

  <div class="profile-section">
    <img src="../src/assets/avatar.png" alt="" />
    <div class="name-address">
      <h4>Laura Wilson</h4>
      <h5>Lagos, Niegeria</h5>
    </div>
    <div class="follow-button">
      <button>Follow</button>
    </div>
  </div>

  <div class="details-button">
    <button on:click={handleIngredientClick}>Ingredient</button>
    <button on:click={handleProcedureClick}>Procedure</button>
  </div>

  <div class="button-result">
    <div class="icon-count">
      <p><img src="../src/assets/Group.png" alt="" />I serve</p>
      <p>10 Items</p>
    </div>
    {#if isIngredient && !isProcudure}
      <!-- {#each Object.entries(singleItem) as [key, value]}
        {#if key === "strIngredient1"}  -->

      <div class="ingrident-section">
        <img src="../src/assets/Rectangle 650.png" alt="" />
        <h3>{singleItem.strIngredient1}</h3>

        <p>500g</p>
      </div>
      <div class="ingrident-section">
        <img src="../src/assets/Rectangle 650.png" alt="" />
        <h3>{singleItem.strIngredient2}</h3>

        <p>500g</p>
      </div>
      <div class="ingrident-section">
        <img src="../src/assets/Rectangle 650.png" alt="" />
        <h3>{singleItem.strIngredient3}</h3>

        <p>500g</p>
      </div>
      <div class="ingrident-section">
        <img src="../src/assets/Rectangle 650.png" alt="" />
        <h3>{singleItem.strIngredient4}</h3>

        <p>500g</p>
      </div>
      <div class="ingrident-section">
        <img src="../src/assets/Rectangle 650.png" alt="" />
        <h3>{singleItem?.strIngredient5}</h3>

        <p>500g</p>
      </div>
      <div class="ingrident-section">
        <img src="../src/assets/Rectangle 650.png" alt="" />
        <h3>{singleItem?.strIngredient6}</h3>

        <p>500g</p>
      </div>
      <div class="ingrident-section">
        <img src="../src/assets/Rectangle 650.png" alt="" />
        <h3>{singleItem?.strIngredient7}</h3>

        <p>500g</p>
      </div>
      <div class="ingrident-section">
        <img src="../src/assets/Rectangle 650.png" alt="" />
        <h3>{singleItem?.strIngredient8}</h3>

        <p>500g</p>
      </div>
      <div class="ingrident-section">
        <img src="../src/assets/Rectangle 650.png" alt="" />
        <h3>{singleItem?.strIngredient9}</h3>

        <p>500g</p>
      </div>

      <!-- {/each} -->
    {:else}
      {#each instructions as item}
        <div class="procedure-section">
          <h3>{item}</h3>
        </div>
      {/each}
    {/if}
  </div>

  <!-- {singleItem?.strIngredient1}
    {singleItem?.strArea}
    {#each instructions as singleInstruction}
      <div class="inst-div">{singleInstruction}</div>
    {/each} -->
</main>

<style>
  main {
    /* color: #e1e1e1; */
    padding: 5px 30px;
  }
  .inst-div {
    margin-top: 20px;
  }

  .recipe-title {
    display: flex;
    justify-content: space-between;
  }

  .recipe-title h3 {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    width: 194px;
    height: 41px;
    color: #000000;
    outline: none;
  }
  .recipe-title p {
    width: 93px;
    height: 20px;
    font-weight: 400;
    font-size: 14px;
    color: #a9a9a9;
  }

  .time-div {
    position: absolute;
    display: flex;
    align-items: center;
    top: 130px;
    right: 10px;
    font-size: 10px;
    font-weight: 600;
    color: #181414;
  }

  .navigate-button {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .arrow-button,
  .three-dots {
    width: 24px;
    height: 24px;
  }
  .recipe-image {
    position: relative;
    /* background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ); */
  }

  .recipe-image img {
    position: relative;
    width: 315px;
    height: 160px;

    border-radius: 10px;
    /* margin: 0px 30px; */
  }
  .profile-section {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    /* justify-content: space-around; */
  }

  .profile-section img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .name-address {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
  }

  .name-address h4 {
    width: 90px;
    height: 21px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #121212;
    margin-bottom: 0;
  }
  .name-address h5 {
    font-weight: 400;
    font-size: 11px;
    color: #a9a9a9;
    margin-top: 0;
  }

  .follow-button > button {
    margin-left: 100px;
    background: #23755d;
    border-radius: 10px;
    height: 37px;
    width: 85px;
    border: none;
    color: #ffffff;
  }
  .rating {
    display: flex;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 40px;
    height: 20px;
    border-radius: 8px;
    background: rgb(227, 230, 92);
  }

  .rating img {
    width: 10px;
    height: 9px;
    margin-left: 5px;
    align-items: center;
  }

  .rating span {
    width: 12px;
    height: 12px;
    font-weight: 400;
    font-size: 8px;
    color: #000000;
  }

  .details-button {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
  }

  .details-button > button {
    border-radius: 10px;
    color: #000000;
    padding: 7px 15px;
    border: none;
  }

  .details-button > button.active {
    background: #23755d;
    color: #ffffff;
  }

  .icon-count {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon-count p {
    font-size: 11px;
    line-height: 16px;
    color: #a9a9a9;
  }

  .icon-count p img {
    margin-right: 5px;
  }

  .ingrident-section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #d9d9d9;
    border-radius: 12px;
    width: 315px;
    height: 76px;
    margin-bottom: 5px;
  }

  .ingrident-section img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #ffffff;
  }

  .ingrident-section h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #121212;
  }

  .ingrident-section p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #a9a9a9;
  }

  .procedure-section {
    display: flex;
    align-items: center;
    background: #d9d9d9;
    border-radius: 12px;
    width: 315px;
    height: 280px;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 14px;
  }
</style>
