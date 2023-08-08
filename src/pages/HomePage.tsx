import { PaginatedEstablishmentsTable } from "../components/PaginatedEstablishmentsTable";
import Background from "../static/logo.svg";
import { useState } from "react";
import { AuthoritiesDropdown } from "../components/AuthoritiesDropdown";
import { FavoritesTable } from "../components/FavouritesTable";
import { createContext } from "react";

const logoStyle: { [key: string]: string | number } = {
  width: "640px",
  height: "25px",
  background: `transparent url(${Background}) no-repeat center`,
  margin: "20px auto",
};

const wrapperStyle = {
  marginLeft: "50px",
};

type FavoriteEstablishmentsContextType = {
  favorites: Record<string, { [key: string]: string }>;
  setFavorites: React.Dispatch<
    React.SetStateAction<Record<string, { [key: string]: string }>>
  >;
};

export const FavoriteEstablishmentsContext =
  createContext<FavoriteEstablishmentsContextType>({
    favorites: {},
    setFavorites: () => {},
  });

const HomePage = () => {
  const [authorityId, setAuthorityId] = useState<string | undefined>(undefined);
  const [favorites, setFavorites] = useState<
    Record<string, { [key: string]: string }>
  >({});

  return (
    <div style={wrapperStyle}>
      <header style={logoStyle} />
      <AuthoritiesDropdown
        authorityId={authorityId}
        setAuthorityId={setAuthorityId}
      />
      <FavoriteEstablishmentsContext.Provider
        value={{ favorites, setFavorites }}
      >
        <PaginatedEstablishmentsTable authorityId={authorityId} />
        <FavoritesTable />
      </FavoriteEstablishmentsContext.Provider>
    </div>
  );
};

export default HomePage;
