import { useEffect, useState } from "react";
import { getAuthorities } from "../api/ratingsAPI";

type Props = {
  authorityId?: string;
  setAuthorityId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const AuthoritiesDropdown: React.FC<Props> = ({
  authorityId,
  setAuthorityId,
}) => {
  const [authorities, setAuthorities] = useState<{ [key: string]: string }[]>(
    []
  );

  useEffect(() => {
    getAuthorities().then((result) => setAuthorities(result?.authorities));
  }, []);

  return (
    <select
      value={authorityId}
      onChange={(event) => setAuthorityId(event.target.value)}
    >
      <option value={undefined}>All</option>
      {authorities.map((authority) => {
        return (
          <option
            key={authority?.LocalAuthorityId}
            value={authority?.LocalAuthorityId}
          >
            {authority?.Name}
          </option>
        );
      })}
    </select>
  );
};
