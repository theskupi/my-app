import * as React from "react";
import { FunctionComponent } from "react";
import { UserInterface } from "../../models/User";
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
  onDetailClick?: (id: number) => void;
}

const UserCard: FunctionComponent<UserCardProps> = ({
  user,
  onDetailClick,
}) => (
  <Card>
    <CardMedia
      image="/static/images/cards/contemplative-reptile.jpg"
      title={user.username}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {user.username}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {user.email} / {user.id}
      </Typography>
    </CardContent>
    {onDetailClick ? (
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => onDetailClick(user.id)}
        >
          Detail
        </Button>
      </CardActions>
    ) : null}
  </Card>
);

export default UserCard;
