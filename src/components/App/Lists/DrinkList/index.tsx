import React, { FC, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Pagination,
  Typography,
} from "@mui/material";

import { getDrinks, IDrink } from "../../../../services/App";

export const DrinkList: FC = () => {
  const [drinks, setDrinks] = useState<Array<IDrink>>([]);

  useEffect(() => {
    (async function () {
      const requestedDrinks = await getDrinks();

      if (requestedDrinks) {
        setDrinks(requestedDrinks);
      }

      console.log(requestedDrinks, process.env.NODE_ENV);
    })();
  }, []);

  return (
    <Box
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      data-testid="list-app"
    >
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
