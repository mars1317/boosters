import { makeStyles } from "@material-ui/core";

const statisticsStyle = makeStyles((theme) => ({
  ChartContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '30px 50px 0 50px'
  },
  '@media screen and (max-width: 768px)': {
    ChartContainer: {
      padding: '50px 0 0 0',
     flexDirection: 'column'
    }
  }
}));
export default statisticsStyle;