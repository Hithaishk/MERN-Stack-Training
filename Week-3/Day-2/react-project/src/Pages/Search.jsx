
export const searchData = [
    { keyword: 'gokarna', route: './Places' },
    
];

const generateRandomSearchData = (keyword) => {
    return searchData.find((item) => item.keyword === keyword.toLowerCase());
};

const Search={
    searchData,
    generateRandomSearchData,
};

  export default Search;
  