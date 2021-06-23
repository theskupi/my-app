import * as React from "react";
import { FunctionComponent } from "react";
import { UserInterface } from "../models/User";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

interface UserCardProps {
  user: UserInterface;
}

const UserCard: FunctionComponent<UserCardProps> = ({ user }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.email} / {user.id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
