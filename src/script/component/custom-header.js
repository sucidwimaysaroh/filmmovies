class CustomHeader extends HTMLElement {
  constructor () {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback () {
    this.render();
  }

  render () {
    this.shadowDOM.innerHTML = `
    <style>
      * {
        box-sizing: border-box;
      }
      :host {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2vw 5vw;
      }
      form {
        background-color: #2C2C2C;
        border-radius: 0.7vw;
        padding: 0 2vw;
        width: max-content;
        display: flex;
        align-items: center;
        gap: 2vw;
      }
      input {
        background-color: #2C2C2C;
        width: 30vw;
        height: 3.5vw;
        border: none;
        outline: none;
        color: white;
        font-size: 1.2vw;
        font-weight: 300;
      }
      .logo {
        width: 15vw;
      }
      .loop {
          width: 1.5vw;
      }
    </style>

    <a href="index.html">
      <img src="src/images/logo.svg" alt="logo" class="logo">
    </a>

    <form>
      <img src="src/images/loop.svg" alt="logo" class="loop">
      <input type="search" id="search" placeholder="Search movies by name">
    </form>
    `
  }
}
  
customElements.define('custom-header', CustomHeader);