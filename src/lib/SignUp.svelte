<script>
  import { Link } from "svelte-navigator";

  let name = "";
  let email = "";
  let password = "";
  function handleSignUn() {}
</script>

<main>
  <div>
    <h2>Create an account</h2>
    <p>Let's help you set up your account, it won't take long.</p>
  </div>
  <form>
    <div class="input_div">
      <label for="" class="input-heading">Name</label>
      <input type="text" placeholder="Enter Name" value={name} />
    </div>
    <div class="input_div">
      <label for="" class="input-heading">Email</label>
      <input type="text" placeholder="Enter Email" value={email} />
    </div>
    <div class="input_div">
      <label for="" class="input-heading">Password</label>
      <input type="password" placeholder="Enter Password" value={password} />
    </div>
    <div class="input_div">
      <label for="" class="input-heading">Confirm Password</label>
      <input type="password" placeholder="Retype Password" value={password} />
    </div>
    <button on:click={handleSignUn}
      >Sign Up
      <img src="../src/assets/Union.png" alt="dfsdf" class="arrow-button" />
    </button>
  </form>
  <h6>----------Or Sign Up with---------</h6>
  <div class="social-media">
    <div class="icon">
      <img src="../src/assets/facebook.png" alt="adfsdf" />
    </div>
    <div class="icon">
      <img src="../src/assets/icons8-google-240 1.png" alt="dfsdf" />
    </div>
  </div>
  <div class="dont-have-account">
    <h5>Already a member?</h5>
    <Link to="/signin"><span class="signUp-btn">Sign In</span></Link>
  </div>
</main>

<style>
  main {
    padding: 0 30px 0 30px;
  }

  h2 {
    width: 191px;
    height: 30px;
    left: 30px;
    top: 54px;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
  p {
    width: 195px;
    height: 34px;
    left: 30px;
    top: 89px;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: #121212;
  }
  .input_div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    margin-bottom: 20px;
  }

  .input_div label {
    margin-bottom: 5px;
  }

  input {
    width: 315px;
    height: 55px;
    top: 26px;
    border: 1.5px solid #d9d9d9;
    border-radius: 10px;
    padding-left: 20px;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: #d9d9d9;
  }

  .forget-password {
    height: 17px;
    line-height: 16px;
    left: 40px;
    font-size: 11px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ff9c00;
  }

  button {
    background: #129575;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* padding: 18px 85px; */
    width: 315px;
    height: 60px;
    left: 30px;
    margin-top: 25px;
    border-radius: 10px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    align-items: center;
  }

  .arrow-button {
    margin-left: 25px;
  }

  h6 {
    width: 281px;
    height: 17px;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #d9d9d9;
  }

  .social-media {
    display: flex;
    gap: 40px;
    width: 315px;
    justify-content: center;
  }

  /* .social-media > img {
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: #ffffff;
    box-shadow: 0px 0px 5px 3px rgba(105, 105, 105, 0.1);
    border-radius: 10px;
  }

  .icon:hover {
    cursor: pointer;
  }

  .dont-have-account {
    display: flex;

    width: 277px;
    height: 17px;
  }

  .dont-have-account .signUp-btn {
    margin-top: 25px;
    margin-left: 10px;
    height: 17px;
    line-height: 16px;
    left: 40px;
    font-size: 11px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ff9c00;
  }

  a:hover {
    /* text-decoration: underline;  */
  }
</style>
