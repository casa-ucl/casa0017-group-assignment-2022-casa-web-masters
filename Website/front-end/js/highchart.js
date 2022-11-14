let period = 1000; //1sec

Highcharts.chart("container", {
  chart: {
    type: "spline",
    backgroundColor: "#ffffff"
  },

  title: {
    text: "Median AQI Measurements"
  },

  subtitle: {
    text: 'Source: ' +
      '<a href="https://aqicn.org/data-platform/covid19"' +
      'target="_blank">AQICN.org</a>'
  },

  xAxis: {
    crosshair: {
      width: 1
    }
  },

  yAxis: {
    title: {
      text: "Micrograms per cubic meter (µg/m3)"
    },
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: null,
    plotBands: [
      {
        // Good
        from: 0.0,
        to: 12.0,
        color: "rgba(26, 255, 0, 0.15)",
        label: {
          text: "Good",
          style: {
            color: "#606060"
          }
        }
      },
      {
        // Moderate
        from: 12.001,
        to: 35.49,
        color: "rgba(255, 224, 0, 0.15)",
        label: {
          text: "Moderate",
          style: {
            color: "#606060"
          }
        }
      },
      {
        // Unhealthy for Sensitive Groups
        from: 35.5,
        to: 55.4,
        color: "rgba(243, 148, 8, 0.15)",
        label: {
          text: "Unhealthy for Sensitive Groups",
          style: {
            color: "#606060"
          }
        }
      },
      {
        // Unhealthy
        from: 55.5,
        to: 150.4,
        color: "rgba(243, 57, 8, 0.15)",
        label: {
          text: "Unhealthy",
          style: {
            color: "#606060"
          }
        }
      },
      {
        // Very Unhealthy
        from: 150.5,
        to: 250.4,
        color: "rgba(220, 1, 155, 0.15)",
        label: {
          text: "Very Unhealthy",
          style: {
            color: "#606060"
          }
        }
      }
    ]
  },

  plotOptions: {
    series: {
      color: "#ABB2B9",
      marker: {
        enabled: false
      },
      label: {
        connectorAllowed: true
      },
      animation: {
        duration: 1200
      }
    }
  },

  data: {
    csv: document.getElementById("csv").innerHTML
  },

  tooltip: {
    shared: true,
    valueSuffix: " µg/m3"
  },

  series: [
    {
      color: "#000000",
      opacity: 1,
      animation: {
        defer: period * 0
      }
    }
  ]
});