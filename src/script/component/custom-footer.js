class CustomFooter extends HTMLElement {
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
        background-color: #1D1D1D;
        padding: 2vw;
        display: flex;
        justify-content: space-evenly;
        align-items: start;
        flex-direction: row;
        color: white;
        font-size: 1.2vw;
        font-weight: 500;
      }
      .left img {
        width: 8vw;
      }
      .right img {
        width: 3vw;
        margin-right: 2vw;
        padding: 0.5vw;
      }
      .small {
        font-size: 1vw;
        font-weight: 300;
        color: #CCCCCC;
      }
    </style>

    <div class="left">
      <p>Powered by</p>
      <a href="https://www.themoviedb.org/"><img src="src/images/themoviedb.svg"></a>
    </div>

    <div class="right">
      <p>Contact</p>
        <div>
          <a href="https://wa.me/6283847888551"><img src="src/images/whatsapp.svg"></a>
          <a href="mailto:sucidm12@gmail.com"><img src="src/images/email.svg"></a>
          <a href="https://www.instagram.com/sucidm12"><img src="src/images/instagram.svg"></a>
          <a href="https://www.linkedin.com/in/suci-dwi-maysaroh-790616218/"><img src="src/images/linkedin.svg"></a>
        </div>
        <p class="small">&copy; 2023 Filmovies All Rights Reserved</p>
    </div>
    `
  }
}

customElements.define('custom-footer', CustomFooter);