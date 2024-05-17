import React, { useCallback, useEffect, useState } from 'react';
import style from './Details.module.scss';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetShowByIdQuery } from '../../redux/api/apiSlice';
import { ROUTER_PATHS } from '../../models/enums';
import { ShowData } from '../../models/interfaces';
import Spinner from '../../components/Spinner/Spinner';
import Cast from './Cast/Cast';
import Seasons from './Seasons/Seasons';
import CardGoOfficialSiteLink from '../../components/CardGoOfficialSiteLink/CardGoOfficialSiteLink';
import { initialShow, noDate } from './detailsData';

const Details: React.FC = () => {
  const [show, setShow] = useState(initialShow);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, isError, error } = useGetShowByIdQuery(id!);

  const goBack = () => {
    navigate(`${ROUTER_PATHS.HOME}`);
  };

  const getShowById = useCallback(
    (data: ShowData) => {
      if (isError && error) {
        console.error(error);
      }

      if (isSuccess) {
        const image = data.image?.original || '';
        const cast = data._embedded.cast || [];

        setShow((prevShow) => ({
          ...prevShow,
          id: data.id,
          image,
          name: data.name,
          rating: data.rating.average,
          language: data.language,
          summary: data.summary,
          genres: data.genres || [noDate],
          premiered: data.premiered,
          ended: data.ended,
          officialSite: data.officialSite,
          cast,
        }));
      }
    },
    [isError, error, isSuccess]
  );

  useEffect(() => {
    data && getShowById(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const showStarted = show.premiered ? show.premiered.slice(0, 4) : '';
  const showEnded = show.ended ? '- ' + show.ended.slice(0, 4) : '';
  const years = `${showStarted} ${showEnded} `;

  return (
    <>
      {isLoading ? (
        <div className={style.loading} data-testid="spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <div className={style.body} data-testid="details">
            <div className={style.details} data-testid="details-image">
              <div className={style.image}>
                {show.image ? (
                  <img src={show.image} alt="cover" />
                ) : (
                  <div className={style.cover}>Best TV Show</div>
                )}
              </div>
              <div className={style.info}>
                <div className={style.name} data-testid="details-name">
                  {show.name}
                </div>
                <div className={style.rating} data-testid="details-rating">
                  <AiFillStar />
                  {show.rating ? (
                    <span className={style.average}>{show.rating}</span>
                  ) : (
                    <span className={style.average}>Not rated</span>
                  )}
                </div>
                <div className={style.language}>Language: {show.language}</div>
                {show.genres && (
                  <div className={style.genres}>Genres: {show.genres.join(', ')}</div>
                )}
                <div className={style.years}>{years}</div>
                {show.officialSite && <CardGoOfficialSiteLink url={show.officialSite} />}
              </div>
            </div>
            <div className={style.summary} data-testid="details-summary">
              <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            </div>
            <button className="button" onClick={goBack}>
              Go Back
            </button>
          </div>
          <Seasons id={id} />
          <Cast cast={show.cast} />
        </>
      )}
    </>
  );
};

export default Details;
