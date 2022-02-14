import { useState } from "react";
import { useDispatch } from "react-redux";
import { Header, Hero, SeachForm, SearchButton, Input } from "./styledItems";
import { Icon } from "../Shared";
import { getCustomer } from "../../store/fetchActions";

const NavBar = () => {
  //default value to request api data
  const [customerField, setCustomerField] = useState(
    "c40d5ac4-7b79-4768-8ffb-1fb7f5fac8c2"
  );
  const dispatch = useDispatch();
  function handleSearchCustomer(ev) {
    ev.preventDefault();
    dispatch(getCustomer(customerField));
  }
  return (
    <Header>
      <Hero>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <span>Light Speed</span>
      </Hero>
      <SeachForm onSubmit={handleSearchCustomer}>
        <Input
          type="text"
          value={customerField}
          onChange={(e) => setCustomerField(e.target.value)}
        />
        <SearchButton type="submit">
          <Icon
            xmlns="http://www.w3.org/2000/Icon"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </Icon>
        </SearchButton>
      </SeachForm>
    </Header>
  );
};

export default NavBar;
