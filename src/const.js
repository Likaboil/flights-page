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
      isChecked: false,
      value: `Без пересадок`,
    },
    {
      isChecked: false,
      value: `1 пересадка`,
    },
    {
      isChecked: false,
      value: `2 пересадки`,
    },
    {
      isChecked: false,
      value: `3 пересадки`,
    }
  ],
};

export const SortFilter = {
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
