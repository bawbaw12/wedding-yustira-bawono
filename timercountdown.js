document.addEventListener("DOMContentLoaded", () => {
  simplyCountdown(".simply-countdown", {
    year: 2024, // required
    month: 3, // required
    day: 2, // required
    hours: 8, // Default is 0 [0-23] integer
    words: {
      //words displayed into the countdown
      days: { singular: "Hari", plural: "days" },
      hours: { singular: "Jam", plural: "hours" },
      minutes: { singular: "Menit", plural: "minutes" },
      seconds: { singular: "Detik", plural: "seconds" },
    },
    plural: false, //use plurals
  });
});
