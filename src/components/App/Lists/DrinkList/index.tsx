import React, { FC, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  iconButtonClasses,
  Pagination,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SkipNext as SkipNextIcon,
  SkipPrevious as SkipPreviousIcon,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";

import { getDrinks, IDrink } from "../../../../services/App";

export const DrinkList: FC = () => {
  const [drinks, setDrinks] = useState<Array<IDrink>>([]);
  const theme = useTheme();

  useEffect(() => {
    (async function () {
      const requestedDrinks = await getDrinks();

      if (requestedDrinks) {
        setDrinks(requestedDrinks);
      }

      console.log(requestedDrinks);
    })();
  }, []);

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {drinks &&
        drinks.map((drink: IDrink) => {
          return (
            <Card
              key={drink.idDrink}
              sx={{ display: "flex", flexDirection: "column-reverse", mb: 2 }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {drink.strDrink}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {drink.strInstructions}
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: "100%", height: "200px" }}
                image={drink.strDrinkThumb}
                alt="Live from space album cover"
              />
            </Card>
          );
        })}

      {/* <Divider variant="inset" component="li" /> */}

      <Pagination
        count={13}
        size="large"
        page={1}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
};
