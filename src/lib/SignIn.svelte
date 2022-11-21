<script>
  import { Link, navigate } from "svelte-navigator";

  let email = "";
  let password = "";

  function handleSignIn() {}

  async function loginWithGoogle() {
    try {
      let userDetails = await window.miniapp.login("google");
      if (userDetails) {
        localStorage.setItem("access-token", userDetails?.access_token);
        localStorage.setItem(
          "User-Profile",
          JSON.stringify(userDetails?.user_profile)
        );
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  }
</script>

<main>
  <div class="main-div">
    <h1>Hello,</h1>
    <h3>Welcome Back!</h3>
    <form>
      <div class="input_div">
        <label for="" class="input-heading">Email</label>
        <input type="text" placeholder="Enter Email" value={email} />
      </div>
      <div class="input_div">
        <label for="" class="input-heading">Enter Password</label>
        <input type="password" placeholder="Enter Password" value={password} />
      </div>
      <div>
        <a href="#/" class="forget-password">Forget Password?</a>
      </div>
      <button class="login-btn" on:click={handleSignIn}
        >Sign In
        <img src="../src/assets/Union.png" alt="dfsdf" class="arrow-button" />
      </button>
    </form>
    <h6>----------Or Sign In with---------</h6>
    <div class="social-media">
      <div class="icon">
        <img src="../src/assets/facebook.png" alt="adfsdf" />
      </div>
      <div class="icon">
        <button on:click={loginWithGoogle}
          ><img
            src="../src/assets/icons8-google-240 1.png"
            alt="dfsdf"
          /></button
        >
      </div>
    </div>
    <div class="dont-have-account">
      <h5>Don't have an Account?</h5>
      <Link to="/signup"><span class="signUp-link">Sign Up</span></Link>
    </div>
  </div>
</main>

<style>
  main {
    padding-left: 20px;
  }

  h1 {
    width: 84px;
    height: 45px;
    left: 30px;
    top: 94px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #000000;
  }

  h3 {
    width: 155px;
    height: 30px;
    left: 30px;
    top: 139px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #121212;
  }

  form {
    position: relative;
    margin-top: 57px;
  }

  .input_div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    margin-bottom: 30px;
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

  .login-btn {
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

  .icon > button {
    border: none;
    background: transparent;
  }

  .icon button img {
    width: 24px;
    height: 24px;
    background: #ffffff;
  }
  .icon:hover {
    cursor: pointer;
  }

  .dont-have-account {
    display: flex;

    width: 277px;
    height: 17px;
  }

  .dont-have-account .signUp-link {
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

  .signUp-link:hover {
    /* text-decoration: underline; */
  }
</style>
