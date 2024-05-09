import React, { useEffect, useState } from 'react';
import style from './Seasons.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { setEpisodes, setId } from '../../../redux/slices/SeasonsSlice';
import { useLoadEpisodesQuery } from '../../../redux/api/apiSlice';
import Loader from '../../../components/Loader/Loader';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { EpisodeData } from '../../../models/interfaces';
import EpisodesList from '../../../components/EpisodesList/EpisodesList';

interface SeasonsProps {
  id: string | undefined;
}

const Seasons: React.FC<SeasonsProps> = ({ id }) => {
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [episodesList, setEpisodesList] = useState<EpisodeData[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError } = useLoadEpisodesQuery(id!);

  const seasons = [...new Set(data?.map((episode) => episode.season))];

  useEffect(() => {
    if (id) {
      dispatch(setId(id));
    }
    if (data) {
      dispatch(setEpisodes(data));
    }
  }, [id, data, dispatch]);

  useEffect(() => {
    if (data) {
      const episodes = data?.filter((episode) => episode.season === selectedSeason);
      setEpisodesList(episodes);
    }
  }, [data, selectedSeason]);

  return (
    <div className={style.seasons}>
      {isLoading && <Loader />}
      {isError && (
        <div className={style.error}>
          <span>Something goes wrong, seasons are not available, please try again later</span>
        </div>
      )}
      <Dropdown
        options={seasons}
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
      />
      <EpisodesList episodesList={episodesList} />
    </div>
  );
};

export default Seasons;
