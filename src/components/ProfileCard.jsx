import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProfileCard = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345, mt: 2 }}>
        <CardMedia
          sx={{ height: 240, objectFit: "cover", bgcolor: "red" }}
          image="https://futhead.cursecdn.com/static/img/21/players_alt/p134375751.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions sx={{display:'flex', justifyContent:"center"}}>
          <Button variant="contained">Click Me!</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProfileCard;
