import { useState } from "react";
import { InputContainer } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { useAuth } from "../../Providers/Auth";
import { useGroupsUser } from "../../Providers/GroupsUser";

const SearchBar = ({ groups, setGroups }) => {
  const [groupName, setGroupName] = useState("");

  const { token } = useAuth();
  const { getGroups } = useGroupsUser();

  const findGroup = (groupName) => {
    if (groups.find((group) => group.name === groupName)) {
      setGroups(groups.filter((group) => group.name === groupName));
    }
  };

  return (
    <>
      <InputContainer>
        <input
          placeholder="Meu Grupo"
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <button
          onClick={() => {
            findGroup(groupName);
            setGroupName("");
          }}
        >
          <SearchIcon />
        </button>
        <button className="AllGroupsButton" onClick={() => getGroups(token)}>
          Meus grupos
        </button>
      </InputContainer>
    </>
  );
};

export default SearchBar;
