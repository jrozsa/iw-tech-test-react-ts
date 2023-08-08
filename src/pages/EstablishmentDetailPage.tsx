import { useNavigate, useParams } from "react-router-dom";
import { EstablishmentType, getEstablishment } from "../api/ratingsAPI";
import { useEffect, useState } from "react";

const wrapperStyle = {
  marginTop: "50px",
  marginLeft: "50px",
  display: "flex",
  flexDirection: "column" as const,
  color: "white",
};

const EstablishmentDetailPage = () => {
  const navigate = useNavigate();
  const { establishmentId } = useParams();
  const [establishmentDetail, setEstablishmentDetail] =
    useState<EstablishmentType>();

  useEffect(() => {
    if (establishmentId) {
      getEstablishment(establishmentId).then((result) =>
        setEstablishmentDetail(result)
      );
    }
  });

  const date = new Date(
    establishmentDetail?.RatingDate ?? ""
  ).toLocaleDateString("en-GB");
  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <div style={wrapperStyle}>
        <div>
          Address:
          {establishmentDetail?.AddressLine1}
          {establishmentDetail?.AddressLine2}
          {establishmentDetail?.AddressLine3}
          {establishmentDetail?.AddressLine4}
        </div>
        <div>
          Rating:
          {establishmentDetail?.RatingValue}
        </div>
        <div>
          Rating date:
          {date}
        </div>
      </div>
    </>
  );
};

export default EstablishmentDetailPage;
