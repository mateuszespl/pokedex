import React from "react";

import SearchInput from "components/SearchBar/SearchBarInput";
import SearchButton from "components/SearchBar/SearchBarButton";
import FilterListButton from "components/FilterList/FilterListButton";
import { StyledSearchSection } from "./SearchSection.styled";

export const SearchSection: React.FC = () => {
  return (
    <StyledSearchSection className="search" data-test="search">
      <form className="search__form">
        <SearchInput />
        <SearchButton />
        <FilterListButton />
      </form>
    </StyledSearchSection>
  );
};
