import { Comment } from "@prisma/client";
import React from "react";

type GroupedComments = {
  [doctorName: string]: {
    [date: string]: Comment[];
    
  };
};

const ViewCommentTable = ({ comments }: { comments: Comment[] }) => {
  // Group comments by doctorName and then by date
  const commentsByDoctorAndDate = comments.reduce<GroupedComments>(
    (groupedComments, comment) => {
      const date = comment.createdAt.toISOString().split("T")[0]; // Get the date part of the timestamp
      (groupedComments[comment.doctorName] =
        groupedComments[comment.doctorName] || {})[date] = (
        groupedComments[comment.doctorName][date] || []
      ).concat(comment);
      return groupedComments;
    },
    {}
  );

  return (


    <div>
  {Object.entries(commentsByDoctorAndDate).map(
    ([doctorName, commentsByDate]) => (
      <div key={doctorName}>
        <h2 className="text-xl font-mono">{doctorName}</h2>
        {Object.entries(commentsByDate).map(([date, comments]) => (
          <div key={date}>
            <h3 className="text-xl font-semibold">{date}</h3>
            {comments.map((comment, index) => {
              const date = comment.createdAt;
              const hours = date.getHours().toString().padStart(2, '0');
              const minutes = date.getMinutes().toString().padStart(2, '0');
              const time = `${hours}:${minutes}`;
              return (
                <p key={comment.id}>{`${index + 1}. ${comment.comment} - ${time}`}</p>
              );
            })}
          </div>
        ))}
      </div>
    )
  )}
</div>
  );
};

export default ViewCommentTable;
