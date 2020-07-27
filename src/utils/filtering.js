export function filtered(movies, genre) {
  if (genre && genre._id)
    return movies.filter((m) => m.genre._id === genre._id);
  else {
    return movies;
  }
}
