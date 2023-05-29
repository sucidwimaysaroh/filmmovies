function main() {
    const baseUrl = 'https://api.themoviedb.org/3';
    const posterUrl = 'https://image.tmdb.org/t/p/w780';
    const backdropUrl = 'https://image.tmdb.org/t/p/w1280';
    const apiKey = '8ebb35a6a7f1f65d1d06f57e750f0704';
  
    const getTrending = () => {
      fetch(`${baseUrl}/trending/movie/day?api_key=${apiKey}`)
        .then(response => {return response.json()})
        .then(data => {renderBakcdrops(data.results); renderMovies(data.results)})
        .catch(error => showMessage(error));
    };
  
    const getSimilar = () => {
      fetch(`${baseUrl}/movie/948713/similar?api_key=${apiKey}`)
      .then(response => {return response.json()})
      .then(data => {renderMovies(data.results)})
      .catch(error => showMessage(error));
    }
  
    const getDetail = () => {
      fetch(`${baseUrl}/movie/948713?api_key=${apiKey}`)
      .then(response => {return response.json()})
      .then(data => {renderDetails(data)})
      .catch(error => showMessage(error));
    }
  
    // const getCast = () => {
    //   fetch(`${baseUrl}/movie/948713/credits?api_key=${apiKey}`)
    //   .then(response => {return response.json()})
    //   .then(data => {renderCasts(data.cast)})
    //   .catch(error => showMessage(error));
    // }
  
    const renderBakcdrops = (movies) => {
      const movieBackdrops = document.querySelector('#movie-backdrops')
      var i = 0;
      var images = [];
      var time = 3000;
  
      movies.slice(0,5).forEach(movie => {
        images.push(backdropUrl+movie.backdrop_path);
      })
  
      function changeImg() {
        movieBackdrops.src = images[i];
        i < (images.length -1) ? i++ : i=0;
        setTimeout(changeImg, time);
      }
      
      window.onload = changeImg;
    }
  
    const renderDetails = (movie) => {
      const movieDetails = document.querySelector('#movie-detail');
      var movieGendre = [];
  
      movie.genres.forEach(genre => {
        movieGendre.push(" "+genre.name)
      })
      
      movieDetails.innerHTML = `
      <img src=${posterUrl}${movie.poster_path} alt="poster" class="poster-detail">
      <div class="content-detail">
        <p class="font-big bold">${movie.original_title} <span class="font-medium bold">(${movie.release_date})</span></p>
        <p class="font-medium">
          <span><img src="src/images/star.svg" alt="star" class="star"></span> 
          ${(movie.vote_average).toFixed(1)} | ${(movie.runtime)} | ${movieGendre}
        </p>
        <p class="font-medium-white">${movie.overview}</p>
        </div>
      </div>
      `;
    }
  
    // const renderCasts = (casts) => {
    //   const movieCast = document.querySelector('#movie-cast');
    //   const showCast = [];
  
    //   casts.slice(0,5).forEach(cast => {
    //     showCast.push(cast);
    //   });
  
    //   movieCast.innerHTML = '';
  
    //   showCast.forEach(cast => {
    //     movieCast.innerHTML +=`
    //     <div class="cast">
    //     <img src=${posterUrl}${cast.profile_path} alt="cast" class="profile">
    //     <p class="font-small">${cast.name}</p>
    //     </div>
    //     `;
    //   });
    // }
  
    const renderMovies = (movies) => {
      const movieList = document.querySelector('#movie-list');
  
      movieList.innerHTML = '';
  
      movies.forEach(movie => {
        const vote_average = (movie.vote_average).toFixed(1);
        movieList.innerHTML += `
        <section class="card">
          <img src=${posterUrl}${movie.poster_path} alt="poster" class="poster">
          <div class="content">
            <div class="rating">
              <img src="src/images/star.svg" alt="star" class="star">
              <p class="font-small">${vote_average}</p>
            </div>
            <p class="font-small bold">${movie.title}</p>
          </div>
        </section>
        `
      });
    };
  
    const showMessage = (message = 'Oops something wrong! Try to check your internet connection') => {
      alert(message);
    };
  
    document.addEventListener('DOMContentLoaded', getTrending(), getSimilar(), getDetail());
  }
  
  export default main;