const composeNameInitials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export { composeNameInitials };
