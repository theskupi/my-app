import * as React from "react";
import { FunctionComponent } from "react";
import { UserComment } from "../../models/UserComment";
import { Card, CardContent, Typography } from "@material-ui/core";

interface UserCommentCardProps {
  comment: UserComment;
}

const UserCommentCard: FunctionComponent<UserCommentCardProps> = ({
  comment,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Comment by: {comment.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <small>Comment content:</small>
          <div>{comment.body}</div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCommentCard;
