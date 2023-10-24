
export const searchData = [
    { keyword: 'gokarna', route: '/gokarna' },
    
];

const generateRandomSearchData = (keyword) => {
    return searchData.find((item) => item.keyword === keyword.toLowerCase());
};

const Search={
    searchData,
    generateRandomSearchData,
};

  export default Search;
  