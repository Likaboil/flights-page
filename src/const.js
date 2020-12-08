export const LoadingMessage = {
  TITLE: `Данные обрабатываются..`,
  TEXT: `Пожалуйста, подождите..`,
};

export const ErrorMessage = {
  TITLE: `Произошла ошибка`,
  TEXT: `Рейсы не найдены`,
};

export const ServerErrorMessage = {
  TITLE: `Ошибка загрузки данных.`,
  TEXT: `Пожалуйста, перезагрузите страницу`,
};

export const NO_TRANSFER_AMOUNT_LABEL = `Без пересадок`;
export const ENDING_OF_TRANSFER_AMOUNT_LABEL = [`пересадка`, `пересадки`, `пересадок`];

export const MINUTE = 60 * 1000;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;


export const FILTERS = {
  headerTitle: `Фильтрация по количеству пересадок`,
  title: `Количество пересадок`,
  items: [
    {
      value: `Без пересадок`,
    },
    {
      value: `1 пересадка`,
    },
    {
      value: `2 пересадки`,

    },
    {
      value: `3 пересадки`,
    }
  ],
};

export const SORTING_FILTERS = {
  headerTitle: `Сортировка`,
  items: [
    {
      type: `cheaper`,
      value: `Самый дешевый`,
    },
    {
      type: `faster`,
      value: `Самый быстрый`
    }
  ],
};

export const SortType = {
  PRICE: `cheaper`,
  SPEED: `faster`,
};

export const UpdateType = {
  INIT: `INIT`,
  ERROR: `ERROR`,
  MAJOR: `MAJOR`,
  MINOR: `MINOR`,
};
