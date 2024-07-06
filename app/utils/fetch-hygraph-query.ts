export const fetchHygraphQuery = async <T>(
  query: string,
  tags?: string[],
): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    next: {
      tags,
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data } = await response.json();

  return data;
};
