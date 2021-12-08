/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable global-require */
// ---Dependencys
import React, { useEffect, ReactElement } from 'react';
// import { Row, Col } from 'antd';
// ---Util Comps
// import ButtonMlg from 'Utils/ButtonMlg';
// ---Components
// import AuthValidate from 'Comp/AuthValidate';
// ---Others
let am4core: any = null;
let am4charts: any = null;
let am4themesAnimated = null;
if (typeof window !== 'undefined') {
  am4core = require('@amcharts/amcharts4/core');
  am4charts = require('@amcharts/amcharts4/charts');
  am4themesAnimated = require('@amcharts/amcharts4/themes/animated');
  am4core.useTheme(am4themesAnimated.default);
}

// ------------------------------------------ Types-----------------------------------------
interface Data {
  area: 'Back'| 'Front'| 'Arch';
  number: number;
}
interface Config {
  nameX?: string;
  nameY?: string;
}
type Variant = 'vertical' | null;
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Graphs({ gData }: { gData: Array<Data> }): ReactElement {
  const gConfig = {
    nameY: 'Quantity'
  };
  useEffect(() => graphXY(gConfig, gData, null), [gData]);
  // ----------------------- Metodos Principales
  function graphXY(config: Config, data: Array<Data>, variant: Variant) {
    // Create chart instance
    const chart = am4core.create('someID', am4charts.XYChart);

    // Add data
    chart.data = data;

    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'area';
    categoryAxis.renderer.grid.template.strokeWidth = 1;
    if (variant && variant === 'vertical') {
      categoryAxis.renderer.inversed = true;
      // categoryAxis.renderer.grid.template.location = 0;
      // categoryAxis.renderer.cellStartLocation = 0.1;
      // categoryAxis.renderer.cellEndLocation = 0.9;
    }
    if (config.nameX) {
      categoryAxis.title.text = config.nameY;
    }

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    // if (variant && variant === 'vertical') {
    //   valueAxis.renderer.opposite = true
    // }
    if (config.nameY) {
      valueAxis.title.text = config.nameY;
    }

    // Create series
    const series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = 'number';
    series1.dataFields.categoryX = 'area';
    series1.name = 'Dev tools';
    series1.tooltipText = '{name}: [bold]{valueY}';

    // Add simple bullet
    const bullet = series1.bullets.push(new am4charts.Bullet());
    const square = bullet.createChild(am4core.Rectangle);
    square.width = 5;
    square.height = 5;

    // Cursor settings
    chart.cursor = new am4charts.XYCursor();

    // Leyend
    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
  }
  // ----------------------- Metodos Auxiliares
  return (
    <div className="container94">
      <div
        style={{ width: '100%', height: '360px', background: 'white' }}
        id="someID"
      />
    </div>
  );
}
