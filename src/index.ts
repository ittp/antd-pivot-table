import { PivotSheet } from "@antv/s2";

let onDataLoaded = (data) => {};

fetch(
  "https://gw.alipayobjects.com/os/bmw-prod/4347c2dd-6554-451b-9d44-15b04e5de657.json"
)
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("container");
    const s2DataConfig = {
      fields: {
        rows: ["excutor", "customer", "service"],
        columns: ["status", "type", "status"],
        values: ["title", "desc"]
      },
      meta: [
        {
          field: "excutor",
          name: "excutor"
        },
        {
          field: "city",
          name: "city"
        },
        {
          field: "type",
          name: "type"
        },
        {
          field: "status",
          name: "status"
        }
      ],
      data
    };

    const s2Options = {
      width: 600,
      height: 480,
      selectedCellsSpotlight: true,
      hoverHighlight: true,
      tooltip: {
        showTooltip: true
      },
      interaction: {
        enableCopy: true
      },
      // 配置小计总计显示
      totals: {
        row: {
          showGrandTotals: true,
          showSubTotals: true,
          reverseLayout: true,
          reverseSubLayout: true,
          subTotalsDimensions: ["excutor"]
        },
        col: {
          showGrandTotals: true,
          showSubTotals: true,
          reverseLayout: true,
          reverseSubLayout: true,
          subTotalsDimensions: ["type"]
        }
      }
    };
    const s2 = new PivotSheet(container, s2DataConfig, s2Options);

    s2.render();
  });
