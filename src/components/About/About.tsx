import React from 'react';
import aboutStyle from './style';
import {useTheme} from "@material-ui/core";

const About:React.FC = () => {
  const theme = useTheme();
  const classes = aboutStyle(theme);
  return (
    <div className={classes.AboutContainer}>
    <h1 className={classes.Title}>About</h1>
    <p className={classes.Content}>This app aimed to inform people about covid around the world. Access data on COVID19 through an easy API for free. Build dashboards, mobile apps or integrate in to other applications. </p>
    <p className={classes.Content}>A new virus called the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) was identified as the cause of a disease outbreak that began in China in 2019. The disease is called coronavirus disease 2019 (COVID-19).

In March 2020, the World Health Organization (WHO) declared COVID-19 a pandemic. Public health groups, including the U.S. Centers for Disease Control and Prevention (CDC) and WHO, are monitoring the pandemic and posting updates on their websites. These groups have also issued recommendations for preventing the spread of the virus.</p>
    </div>
  )
}

export default About;