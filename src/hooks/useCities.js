import { useState, useEffect } from 'react';
import { commonRoutes } from 'api/baseSettings';
import { getRegionsOfCities } from 'helpers/getRegionsOfCities';
import toast from 'react-hot-toast';
import i18n from 'i18n';

export const useCities = () => {
  const [cityValue, setCityValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleOnInputChange = value => {
    if (value.length >= 3) {
      setCityValue(value);
    }
  };

  useEffect(() => {
    async function getCities() {
      if (cityValue < 3) {
        return;
      }

      try {
        setIsLoading(true);

        const { data } = await commonRoutes.get(
          `api/cities?query=${cityValue}`
        );
        setResults(getRegionsOfCities(data));

        setIsLoading(false);
      } catch (error) {
        toast.error(i18n.t('Try_again'));
      }
    }

    getCities();
  }, [cityValue]);
};
