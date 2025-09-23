export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
};
