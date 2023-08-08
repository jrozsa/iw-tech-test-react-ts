import { PaginatedEstablishmentsTable } from "../components/PaginatedEstablishmentsTable";
import Background from "../static/logo.svg";
import { useState } from "react";
import { AuthoritiesDropdown } from "../components/AuthoritiesDropdown";

const logoStyle: { [key: string]: string | number } = {
  width: "640px",
  height: "25px",
  background: `transparent url(${Background}) no-repeat center`,
  margin: "20px auto",
};

const wrapperStyle = {
  marginLeft: "50px",
};

const HomePage = () => {
  const [authorityId, setAuthorityId] = useState<string | undefined>(undefined);

  return (
    <div style={wrapperStyle}>
      <header style={logoStyle} />
      <AuthoritiesDropdown
        authorityId={authorityId}
        setAuthorityId={setAuthorityId}
      />
      <PaginatedEstablishmentsTable authorityId={authorityId} />
    </div>
  );
};

export default HomePage;
