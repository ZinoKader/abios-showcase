export const hourMinuteDiffFormat = (d1, d2) => {
  let diffMillis = Math.abs(d1 - d2) / 1000;
  const diffDays = Math.floor(diffMillis / 86400);
  diffMillis -= diffDays * 86400;
  const diffHours = Math.floor(diffMillis / 3600) % 24;
  diffMillis -= diffHours * 3600;
  const diffMinutes = Math.floor(diffMillis / 60) % 60;
  return diffHours < 1
    ? diffMinutes + "m"
    : diffHours + "h " + diffMinutes + "m";
};

export const ymdFormat = (d) => {
  console.log(d.getFullYear());
  return [
    d.getFullYear(),
    (parseInt(d.getMonth()) + 1).toString().padStart(2, "0"),
    parseInt(d.getDate()).toString().padStart(2, "0"),
  ].join("-");
};
