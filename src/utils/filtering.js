export function filtered(movies, genre, searchQuery) {
  if (searchQuery) {
    return movies.filter((m) =>
      m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  } else {
    if (genre && genre._id)
      return movies.filter((m) => m.genre._id === genre._id);
    else {
      return movies;
    }
  }
}
