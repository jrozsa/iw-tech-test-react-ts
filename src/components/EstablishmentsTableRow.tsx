const textStyle: { [key: string]: string | number } = {
  fontSize: "20px",
};

export const EstablishmentsTableRow: React.FC<{
  establishment: { [key: string]: string } | null | undefined;
}> = ({ establishment }) => {
  return (
    <tr>
      <td style={textStyle}>{establishment?.BusinessName}</td>
      <td style={textStyle}>{establishment?.RatingValue}</td>
    </tr>
  );
};
