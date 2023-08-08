import { useContext } from "react";
import { FavoriteEstablishmentsContext } from "../pages/HomePage";

const textStyle: { [key: string]: string | number } = {
  fontSize: "20px",
};

export const FavoritesTableRow: React.FC<{
  establishment: { [key: string]: string } | null | undefined;
}> = ({ establishment }) => {
  const { setFavorites } = useContext(FavoriteEstablishmentsContext);

  return (
    <tr>
      <td style={textStyle}>{establishment?.BusinessName}</td>
      <td style={textStyle}>{establishment?.RatingValue}</td>
      <td>
        <button
          onClick={() =>
            setFavorites((prevState) => {
              const { [establishment?.FHRSID ?? ""]: _, ...rest } = prevState;
              return rest;
            })
          }
        >
          Remove
        </button>
      </td>
    </tr>
  );
};
