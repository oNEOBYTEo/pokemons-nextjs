import { FC } from 'react';

import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './';
import { useRouter } from 'next/router';

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  const router = useRouter();
  const onClickedFavorite = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <Grid
          xs={6}
          sm={3}
          md={2}
          xl={1}
          key={id}
          onClick={() => onClickedFavorite(id)}
        >
          <FavoriteCardPokemon id={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
