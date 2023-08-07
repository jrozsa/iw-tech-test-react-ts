export type EstablishmentsType = {
  establishments: {}[];
  meta: {
    dataSource: string;
    extractDate: string;
    itemCount: number;
    returncode: string;
    totalCount: number;
    totalPages: number;
    pageSize: number;
    pageNumber: number;
  };
  links: [
    {
      rel: string;
      href: string;
    }
  ];
};

export type AuthoritiesType = {
  authorities: {}[];
  meta: {
    dataSource: string;
    extractDate: string;
    itemCount: number;
    returncode: string;
    totalCount: number;
    totalPages: number;
    pageSize: number;
    pageNumber: number;
  };
  links: [
    {
      rel: string;
      href: string;
    }
  ];
};

export function getEstablishmentRatings(
  pageNum: number,
  authorityId?: string
): Promise<EstablishmentsType> {
  return fetch(
    `http://api.ratings.food.gov.uk/Establishments/basic/${pageNum}/10?localAuthorityId=${authorityId}`,
    { headers: { "x-api-version": "2" } }
  ).then((res) => res.json());
}

export function getAuthorities(): Promise<AuthoritiesType> {
  return fetch(`http://api.ratings.food.gov.uk/Authorities/basic/`, {
    headers: { "x-api-version": "2" },
  }).then((res) => res.json());
}
