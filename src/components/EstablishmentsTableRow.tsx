import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoriteEstablishmentsContext } from "../pages/HomePage";

const textStyle: { [key: string]: string | number } = {
  fontSize: "20px",
};

export const EstablishmentsTableRow: React.FC<{
  establishment: { [key: string]: string } | null | undefined;
}> = ({ establishment }) => {
  const { favorites, setFavorites } = useContext(FavoriteEstablishmentsContext);

  const isChecked = favorites.hasOwnProperty(establishment?.FHRSID || "");
  return (
    <tr>
      <td style={textStyle}>
        <Link to={`establishments/${establishment?.FHRSID}`}>
          {establishment?.BusinessName}
        </Link>
      </td>
      <td style={textStyle}>{establishment?.RatingValue}</td>

      <td>
        <input
          type="checkbox"
          checked={isChecked}
          disabled={isChecked}
          onChange={() => {
            if (!isChecked) {
              setFavorites((prevState) => {
                return {
                  ...prevState,
                  [establishment?.FHRSID || ""]: establishment ?? {},
                };
              });
            }
          }}
        />
      </td>
    </tr>
  );
};
