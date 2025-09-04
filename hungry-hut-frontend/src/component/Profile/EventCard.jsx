import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div className="">
      <Card sx={{width:345}}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://images.pexels.com/photos/4886378/pexels-photo-4886378.jpeg"
        />
        <CardContent>
            <Typography variant="h5">
                Indian Fast Food
            </Typography>
            <Typography variant="body2">
                50% off on your first order
            </Typography>
            <div className="py-2 space-y-2">
                <p>{"Mumbai"}</p>
                <p className="text-sm text-blue-500">February 14, 2025 12:00 AM</p>
                <p className="text-sm text-red-500">February 24, 2025 12:00 AM</p>
            </div>
        </CardContent>
        {true && 
            <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>
        }
      </Card>
    </div>
  );
};

export default EventCard;
