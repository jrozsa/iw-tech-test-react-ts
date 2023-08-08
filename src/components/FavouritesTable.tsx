import React, { useContext } from "react";

import { FavoritesTableRow } from "./FavoritesTableRow";
import { FavoriteEstablishmentsContext } from "../pages/HomePage";

const headerStyle: { [key: string]: string | number } = {
  paddingBottom: "10px",
  textAlign: "left",
  fontSize: "20px",
};

export const FavoritesTable: React.FC = () => {
  const { favorites } = useContext(FavoriteEstablishmentsContext);
  return (
    <table>
      <tbody>
        <tr>
          <th style={headerStyle}>Business Name</th>
          <th style={headerStyle}>Rating Value</th>
        </tr>
        {favorites && Object.keys(favorites).length !== 0 ? (
          Object.values(favorites).map(
            (
              establishment: { [key: string]: string } | null | undefined,
              index: React.Key | null | undefined
            ) => <FavoritesTableRow key={index} establishment={establishment} />
          )
        ) : (
          <tr>
            <td>No favorites</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
