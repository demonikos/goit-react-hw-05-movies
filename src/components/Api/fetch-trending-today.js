import axios from 'axios';

const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

const fetchTrendingTodayMovies = async (page = 1) => {
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  try {
    const response = await axios.get(URL);

    const daylyTrendsData = {
      page: response.data.page,
      trendsList: response.data.results,
      // weeklyTrendsListYears: response.data.results.release_date,
      trendsTotalPages: response.data.total_pages,
      //   weeklyTrendsTotal: response.data.total_results,
    };

    //  return weeklyTrendsData;
    return daylyTrendsData;
  } catch (error) {
    console.log(error);
  }
};

export { fetchTrendingTodayMovies };
