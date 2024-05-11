function validateDate(date: string) {
  if (typeof date !== "string") throw new Error("date is not a string");

  const regex = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])(\/)([12]\d{3})$/;

  if (!date.match(regex)) {
    return false;
  }

  const splitDate = date.split("/");

  const day = splitDate[0];
  const month = splitDate[1];
  const year = splitDate[2];

  if (+day > 29 && +month == 2 && +year % 4 === 0) {
    return false;
  }

  if (+day > 28 && +month == 2 && +year % 4 !== 0) {
    return false;
  }

  if (+month % 2 == 0 && +month < 8) {
    if (+day == 31) return false;
  }
  if (+month % 2 !== 0 && +month > 8) {
    if (+day == 31) return false;
  }

  return true;
}

export { validateDate };
