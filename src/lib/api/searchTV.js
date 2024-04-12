export async function searchTVShows(query) {
  const url = `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;
  const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzZmMWQ1MDAzNmFmNzZkMGQzNWM0M2IzYTZhNWViOCIsInN1YiI6IjY2MGJmZWZiOTVjZTI0MDE3ZDZkZTc2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.llYXwpFqTbJYTSISCeCpg0zt34aFMLB6u6SbGZ4PayU',
    'Accept': 'application/json'
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
}
