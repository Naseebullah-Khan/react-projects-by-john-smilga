const paginate = (followers) => {
  const ITEMS_PER_PAGE = 9;
  const pages = Math.ceil(followers.length / ITEMS_PER_PAGE);
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * ITEMS_PER_PAGE;
    return followers.slice(start, start + ITEMS_PER_PAGE);
  });
  return newFollowers;
};

export default paginate;
