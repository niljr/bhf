import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: 40
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class BoardingHouseInformation extends React.Component {
    state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
        let { 
            // price,
            _id, 
            boarding_house_name, 
            exclusivity, 
            district,
            has_aircon_rooms,
            full_address,
            min_rate,
            number_of_rooms,
            max_rate
        } = this.props.bhs;
        return (
            <div>
                <Card className={classes.card}>
                <CardHeader
                        title={boarding_house_name}
                        subheader="09301234483"
                    />
                    <CardMedia
                        className={classes.media}
                        image="../images/bh.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="headline">
                        {full_address}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <Icon color="action">
                                home
                            </Icon>
                        </IconButton>
                        <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                        >
                        </IconButton>
                    </CardActions>
                        <CardContent>
                        <Typography paragraph variant="body2">
                           Number of Rooms:
                        </Typography>
                        <Typography paragraph>
                            {number_of_rooms}
                        </Typography>
                        <Typography paragraph variant="body2">
                          With Aircon?:
                        </Typography>
                        <Typography paragraph>
                            {has_aircon_rooms === 'withAC' ? 'Yes' : 'None'  }
                        </Typography>
                        <Typography paragraph variant="body2">
                          Exclusivity:
                        </Typography>
                        <Typography paragraph>
                            {exclusivity}
                        </Typography>
                        <Typography paragraph variant="body2">
                          Price:
                        </Typography>
                        <Typography paragraph>
                            P{min_rate} - P{max_rate}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}



export default withStyles(styles)(BoardingHouseInformation);