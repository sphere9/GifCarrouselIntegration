window.onMonitoringDataUpdate = function (data) {
  document.getElementById("cpuName").textContent = data.cpuName || "CPU";
  document.getElementById("gpuName").textContent = data.gpuName || "GPU";
  document.getElementById("cpuTemp").textContent = `${Math.round(data.cpuTemperature)} °C`;
  document.getElementById("gpuTemp").textContent = `${Math.round(data.gpuTemperature)} °C`;
  document.getElementById("cpuLoad").textContent = `${Math.round(data.cpuLoad)}%`;
  document.getElementById("gpuLoad").textContent = `${Math.round(data.gpuLoad)}%`;
};
