<script>
  import { navigate } from "svelte-navigator";
</script>

<main>
  <img src="../src/assets/Rectangle 6.png" alt="xyz" />
  <div class="upper-section">
    <img src="../src/assets/image 11.png" alt="y" />
    <h2>100K+ Premium Recipe</h2>
  </div>
  <div class="mid-section">
    <h1>Get Cooking</h1>
    <p>Simple way to find Tasty Recipe</p>
  </div>
  <div>
    <button class="start-button" on:click={() => navigate("/signin")}
      >Start Cooking
      <img src="../src/assets/Union.png" alt="z" />
    </button>
  </div>
</main>

<style>
  main {
    position: relative;
    width: 375px;
    height: 823px;
    left: 0;
    top: 0;
    background: linear-gradient(
      179.98deg,
      rgba(0, 0, 0, 0.4) 0.01%,
      #000000 99.99%
    );
  }
  .upper-section img {
    position: absolute;
    width: 70px;
    height: 79px;
    top: 104px;
    left: 148px;
    right: 148px;
  }
  .upper-section h2 {
    position: absolute;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #ffffff;
    text-align: center;
    top: 197px;
    left: 83px;
    right: 83px;
    outline: none;
  }
  .mid-section {
  }

  .mid-section h1 {
    position: absolute;
    text-align: center;
    font-weight: 600;
    font-size: 50px;
    line-height: 120%;
    color: #ffffff;
    top: 446px;
    left: 81px;
    right: 81px;
    outline: none;
  }

  .mid-section p {
    position: absolute;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    top: 586px;
    left: 50px;
    margin-top: 20px;
  }

  .start-button {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 50px;
    gap: 9px;
    width: 243px;
    height: 54px;
    left: 66px;
    top: 674px;
    background: #129575;
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    border: none;
  }

  .start-button img {
    margin-left: 10px;
  }

  /* .start-button button {
    width: 114px;
    height: 24px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  } */
</style>
