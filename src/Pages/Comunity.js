import React from "react";
import { Animated } from "react-animated-css";
import Box from "../Components/box";
import DownCom from "../Components/Community/DownCom";
import ListShirt from "../Components/Community/ListShirt";
import Museo from "../Components/Community/Museo";
import TopTen from "../Components/Community/TopTen";
import ButtomTitle from "../Components/Community/ButtomTitle";

import TitleCom from "../Components/Community/TitleCom";
import Carret from "../images/double_carret.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import Imagen1 from "../images/camisetas/1.jpeg";
import Imagen2 from "../images/camisetas/2.jpeg";
import Imagen3 from "../images/camisetas/3.jpeg";
import Imagen4 from "../images/camisetas/4.jpeg";
import Imagen5 from "../images/camisetas/5.jpeg";
import Imagen6 from "../images/camisetas/6.jpeg";
import Imagen7 from "../images/camisetas/7.jpeg";
import Imagen8 from "../images/camisetas/8.jpeg";

import Exibe from "../images/archivos-01.png";
import Inter from "../images/archivos-02.png";
import Vend from "../images/archivos-03.png";

const Comunity = () => {
  const [t, i18n] = useTranslation("common");

  /* Datos a actualizar todos los meses */

  const TopShirts = [
    {
      /* Camiseta N° 1 */
      user: "todoutileria",
      club: "Atletico Morelia",
      country: t("comunity.ListShirt.mexico"),
      year: "2020",
      image: Imagen1,
      tipo: Vend,
    },
    {
      /* Camiseta N° 2 */
      user: "enzocabral.ch",
      club: "Liverpool",
      country: t("comunity.ListShirt.england"),
      year: "2010",
      image: Imagen2,
      tipo: Vend,
    },
    {
      /* Camiseta N° 3 */
      user: "juandezcurra",
      club: "River Plate",
      country: t("comunity.ListShirt.argentina"),
      year: "2015",
      image: Imagen3,
      tipo: Vend,
    },
    {
      /* Camiseta N° 4 */
      user: "fueradelarea",
      club: "Estudiantes ",
      country: t("comunity.ListShirt.argentina"),
      year: "2006",
      image: Imagen4,
      tipo: Vend,
    },
    {
      /* Camiseta N° 5 */
      user: "joyadelbarrio",
      club: "rangers de talca",
      country: t("comunity.ListShirt.chile"),
      year: "2021",
      image: Imagen5,
      tipo: Inter,
    },
    {
      /* Camiseta N° 6 */
      user: "todorojocai",
      club: "Independiente",
      country: t("comunity.ListShirt.argentina"),
      year: "2000",
      image: Imagen6,
      tipo: Inter,
    },
    {
      /* Camiseta N° 7 */
      user: "puertogol",
      club: "Arsenal",
      country: t("comunity.ListShirt.england"),
      year: "2016",
      image: Imagen7,
      tipo: Vend,
    },
    {
      /* Camiseta N° 8 */
      user: "rojo.10",
      club: "Independiente ",
      country: t("comunity.ListShirt.argentina"),
      year: "2017",
      image: Imagen8,
      tipo: Vend,
    },
  ];

  const TopCounter = [1024, 16400];
  const month = [t("comunity.months.oct")];

  const Top3 = [
    {
      username: "pablorh239",
      number: "2",
      user: "pablorh239",
      countShirt: "462",
    },
    {
      username: "robertobaigo",
      number: "1",
      user: "robertobaigo",
      countShirt: "1414",
    },
    {
      username: "telasdecoleccion",
      number: "3",
      user: "telasdecoleccion",
      countShirt: "429",
    },
  ];
  const Top10 = [
    {
      username: "sebacuevas32",
      number: "4",
      user: "sebacuevas32",
      countShirt: "359",
    },
    {
      number: "5",
      user: "reddevilcai",
      countShirt: "248",
    },
    {
      number: "6",
      user: "guga.7",
      countShirt: "202",
    },
    {
      number: "7",
      user: "maticalvete",
      countShirt: "201",
    },
    {
      number: "8",
      user: "nicolasoyarzun",
      countShirt: "194",
    },
    {
      number: "9",
      user: "lcidfig",
      countShirt: "191",
    },
    {
      number: "10",
      user: "silorhaless",
      countShirt: "187",
    },
  ];

  /* FIN Datos a actualizar todos los meses */

  return (
    <div className="page-comunidad">
      <Helmet>
        <title>Comunidad</title>
      </Helmet>
      <Box />
      <Animated
        animationIn="fadeInUp"
        animationOut="flipOutX"
        animationInDuration={600}
        animationOutDuration={400}
        isVisible={true}
      >
        <TitleCom month={month} translate={t} />
        <br />
        <img alt="" src={Carret} className="carret" />
      </Animated>
      <Animated
        animationIn="fadeInUp"
        animationOut="flipOutX"
        animationInDuration={600}
        animationOutDuration={400}
        isVisible={true}
      >
        <ListShirt TopShirts={TopShirts} translate={t} />
      </Animated>
      <Animated
        animationIn="fadeInUp"
        animationOut="flipOutX"
        animationInDuration={600}
        animationOutDuration={400}
        isVisible={true}
      >
        <Museo i18n={i18n} counter={TopCounter} translate={t} />
        <TopTen i18n={i18n} Top3={Top3} Top10={Top10} translate={t} />
        <ButtomTitle translate={t} />
      </Animated>

      <DownCom translate={t} />
    </div>
  );
};

export default Comunity;
