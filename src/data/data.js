const fundPerformanceData = {
  greenrock: [
    { label: "Fonds Alpha", data: [100, 104, 102, 103, 107, 109, 112, 107, 110, 123, 121, 117] },
    { label: "Fonds Bravo", data: [120, 114, 112, 113, 120, 109, 102, 90, 105, 107, 108, 112] },
  ],
  bluerock: [
    {
      label: "Fonds Actif",
      data: [2000, 1400, 1200, 1150, 1208, 1301, 1467, 1560, 1456, 1480, 1432, 1490],
    },
    {
      label: "Fonds Passif",
      data: [1200, 1140, 1120, 1130, 1200, 1090, 1020, 900, 1050, 1070, 1080, 1120],
    },
  ],
};

const optionsPerformanceLine = {
  plugins: {
    title: {
      display: true,
      text: "Evolutions valeur Liquidative",
    },
  },
  interaction: {
    mode: "x",
  },
};

const optionsColor = {
  greenrock: ["#00A86B", "#98FB90"],
  bluerock: ["#00FFFF", "#00BFFF"],
};

export { fundPerformanceData, optionsPerformanceLine, optionsColor };
